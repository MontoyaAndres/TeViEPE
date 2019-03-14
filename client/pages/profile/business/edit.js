import React, { useEffect } from "react";
import { Form, withFormik, Field } from "formik";
import dynamic from "next/dynamic";
import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "next/router";
import Error from "next/error";

import Loading from "../../../components/shared/loading";
import TownsByDepartament from "../../../utils/townsByDepartament";
import { informationBusinessQuery } from "../../../graphql/queries/account";
import checkLoggedIn from "../../../lib/checkLoggedIn";
import redirect from "../../../lib/redirect";
import EditGeneralInformation from "../../../components/business/edit/editGeneralInformation";
import EditSocialNetwork from "../../../containers/edit/editSocialNetwork";
import EditGoogleMapsLocalization from "../../../components/business/edit/editGoogleMapsLocalization";

const DynamicUploadRouteCover = dynamic(
  () => import("../../../containers/edit/uploadRouteCover"),
  {
    loading: () => <Loading />,
    ssr: false
  }
);
const DynamicUploadRoutePhoto = dynamic(
  () => import("../../../containers/edit/uploadRoutePhoto"),
  {
    loading: () => <Loading />,
    ssr: false
  }
);
const DynamicEditGoogleMapsLocalization = dynamic(
  () => import("../../../components/business/edit/editGoogleMapsLocalization"),
  {
    loading: () => <Loading />,
    ssr: false
  }
);

const edit = ({
  loading,
  data,
  setFieldValue,
  values,
  handleSubmit,
  isSubmitting
}) => {
  useEffect(() => {
    // When the `departament` value changes, reseting the `town` value.
    if (values.departament !== "Extranjero") {
      values.town = Object.values(TownsByDepartament[values.departament])[0];
    }
  }, [values.departament]);

  useEffect(() => {
    // If the business is foreigner, it shouldn't has a town.
    if (
      values.nationality !== "Colombia" ||
      values.departament === "Extranjero"
    ) {
      values.town = "";
    }
  }, [values.nationality, values.departament]);

  if (loading) {
    return <Loading />;
  }

  if (!data.informationBusiness) {
    return <Error statusCode={404} />;
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <Field name="routeCover" component={DynamicUploadRouteCover} />
      <Field name="routePhoto" component={DynamicUploadRoutePhoto} />

      <div id="edited" className="container">
        {/* Business updated successfully */}
        {values.edited && (
          <div className="animated bounceIn notification is-primary">
            <button
              type="button"
              className="delete"
              onClick={() => setFieldValue("edited", false, false)}
            />
            <p className="subtitle">Los cambios se han realizado con exito.</p>
          </div>
        )}

        <EditGeneralInformation
          departament={values.departament}
          nationality={values.nationality}
        />
        <Field
          name="googleMapsLocalization"
          component={DynamicEditGoogleMapsLocalization}
        />
        <EditSocialNetwork
          socialnetwork={values.socialnetwork}
          setFieldValue={setFieldValue}
        />
        <div
          className="buttons has-addons is-centered"
          style={{ padding: "30px 0" }}
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className={`button is-primary is-large ${
              isSubmitting ? "is-loading" : ""
            }`}
            style={{ width: 200 }}
          >
            Enviar
          </button>
        </div>
      </div>
    </Form>
  );
};

edit.getInitialProps = async context => {
  const { loggedInUser } = await checkLoggedIn(context.apolloClient);

  if (!loggedInUser.me) {
    redirect(context, "/login");
  }

  if (context.req) {
    // Businesses with differents ids cannot edit information.
    if (loggedInUser.me.id !== context.req.params.id) {
      redirect(context, "/");
    }
  }

  return {};
};

export default compose(
  withRouter,
  graphql(informationBusinessQuery, {
    options: ({
      router: {
        query: { id }
      }
    }) => ({ variables: { id } })
  }),
  withFormik({
    mapPropsToValues: ({ data }) => ({
      routePhoto: data.informationBusiness.routePhoto || "",
      routeCover: data.informationBusiness.routeCover || "",
      name: data.informationBusiness.name,
      description: data.informationBusiness.description || "",
      address: data.informationBusiness.address || "",
      telephoneCountry: data.informationBusiness.telephoneCountry,
      telephone: data.informationBusiness.telephone,
      telephone2Country: data.informationBusiness.telephone2Country || 57,
      telephone2: data.informationBusiness.telephone2 || 0,
      departament: data.informationBusiness.departament || "",
      town: data.informationBusiness.town || "",
      nationality: data.informationBusiness.nationality || "",
      sector: data.informationBusiness.sector,
      website: data.informationBusiness.website || "",
      optionalEmail: data.informationBusiness.optionalEmail || "",
      googleMapsLocalization:
        data.informationBusiness.googleMapsLocalization || "",
      socialnetwork: data.informationBusiness.socialnetwork || []
    }),
    handleSubmit: async (values, { setSubmitting }) => {
      setSubmitting(false);
      console.log(values);
    }
  })
)(edit);
