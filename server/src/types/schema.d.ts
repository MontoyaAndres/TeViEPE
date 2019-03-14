// tslint:disable
// graphql typescript definitions

export namespace GQL {
interface IGraphQLResponseRoot {
data?: IQuery | IMutation;
errors?: Array<IGraphQLResponseError>;
}

interface IGraphQLResponseError {
/** Required for all errors */
message: string;
locations?: Array<IGraphQLResponseErrorLocation>;
/** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
[propName: string]: any;
}

interface IGraphQLResponseErrorLocation {
line: number;
column: number;
}

interface IQuery {
__typename: "Query";
employs: Array<IEmploy | null> | null;
employ: IEmploy | null;
informationBusiness: IBusinessInformation | null;
memberUser: Array<ICustomer | null> | null;
feedback: IFeedbackResponse | null;
portfolio: Array<IPortfolio | null> | null;
information: IUserInformation | null;
necessity: INecessityResponse | null;
me: ICustomer | null;
}

interface IEmploysOnQueryArguments {
businessId: string;
}

interface IEmployOnQueryArguments {
employId: string;
}

interface IInformationBusinessOnQueryArguments {
id: string;
}

interface IMemberUserOnQueryArguments {
name?: string | null;
lastname?: string | null;
email?: string | null;
}

interface IFeedbackOnQueryArguments {
id: string;
}

interface IPortfolioOnQueryArguments {
id: string;
}

interface IInformationOnQueryArguments {
id: string;
}

interface INecessityOnQueryArguments {
userId: string;
}

interface IEmploy {
__typename: "Employ";
id: string | null;
position: string;
description: string;
area: string;
skills: Array<string | null> | null;
minStudy: string;
minExperience: number;
language: Array<string | null> | null;
travel: string;
residence: string;
country: string;
departament: string;
town: string;
time: string;
contract: string;
minSalary: any | null;
maxSalary: any | null;
currency: string | null;
}

interface IBusinessInformation {
__typename: "BusinessInformation";
id: string | null;
routePhoto: string;
routeCover: string | null;
name: string;
description: string | null;
address: string | null;
telephoneCountry: number;
telephone: any;
telephone2Country: number | null;
telephone2: any | null;
departament: string | null;
town: string | null;
nationality: string | null;
sector: string;
website: string | null;
optionalEmail: string | null;
email: string;
googleMapsLocalization: string | null;
socialnetwork: Array<ISocialNetworkBusiness | null> | null;
member: Array<ICustomer | null> | null;
}

interface ISocialNetworkBusiness {
__typename: "SocialNetworkBusiness";
name: string;
url: string;
}

interface ICustomer {
__typename: "Customer";
id: string;
name: string;
lastname: string | null;
email: string;
routePhoto: string;
type: string | null;
}

interface IFeedbackResponse {
__typename: "FeedbackResponse";
response: Array<IFeedback | null>;
count: number | null;
}

interface IFeedback {
__typename: "Feedback";
id: string | null;
stars: number | null;
comment: string | null;
from: ICustomer | null;
}

interface IPortfolio {
__typename: "Portfolio";
id: string | null;
multimedia: Array<string | null> | null;
description: string | null;
}

interface IUserInformation {
__typename: "UserInformation";
id: string | null;
routePhoto: string;
routeCover: string | null;
name: string;
lastname: string;
description: string | null;
identificationDocumentType: string;
identificationDocument: any;
address: string | null;
telephoneCountry: number;
telephone: any;
telephone2Country: number | null;
telephone2: any | null;
departament: string | null;
town: string | null;
nationality: string | null;
birth: any | null;
civilStatus: string | null;
website: string | null;
gender: string | null;
disability: string | null;
optionalEmail: string | null;
email: string;
skills: Array<string | null> | null;
socialnetwork: Array<ISocialNetwork | null> | null;
language: Array<ILanguage | null> | null;
study: Array<IStudy | null> | null;
work: Array<IWork | null> | null;
preferwork: IPreferWork | null;
cv: Array<ICV | null> | null;
}

interface ISocialNetwork {
__typename: "SocialNetwork";
name: string;
url: string;
}

interface ILanguage {
__typename: "Language";
id: string | null;
language: string | null;
level: string | null;
}

interface IStudy {
__typename: "Study";
id: string | null;
place: string | null;
level: string | null;
area: string | null;
startedOn: any | null;
finishIn: any | null;
}

interface IWork {
__typename: "Work";
id: string | null;
company: string | null;
job: string | null;
departament: string | null;
sector: string | null;
area: string | null;
goals: string | null;
startedOn: any | null;
finishIn: any | null;
}

interface IPreferWork {
__typename: "PreferWork";
id: string | null;
currentSituation: string | null;
job: string | null;
area: Array<string | null> | null;
salary: any | null;
currency: string | null;
departament: Array<string | null> | null;
travel: string | null;
residence: string | null;
}

interface ICV {
__typename: "CV";
id: string | null;
filename: string | null;
routeCV: string | null;
}

interface INecessityResponse {
__typename: "NecessityResponse";
response: Array<INecessity | null>;
count: number;
}

interface INecessity {
__typename: "Necessity";
id: string | null;
finished: boolean | null;
comment: string | null;
}

interface IMutation {
__typename: "Mutation";
employ: Array<IError> | null;
applyEmploy: boolean;
deleteEmploy: boolean;
generalInformationBusiness: Array<IError> | null;
feedback: Array<IError> | null;
deleteFeedback: boolean;
portfolio: Array<IError> | null;
updatePortfolio: Array<IError> | null;
deletePortfolio: boolean;
generalInformation: Array<IError> | null;
necessity: boolean;
updateNecessity: boolean;
deleteNecessity: boolean;
sendForgotPasswordEmail: boolean | null;
forgotPasswordChange: Array<IError> | null;
login: Array<IError> | null;
logout: boolean | null;
register: Array<IError> | null;
registerBusiness: Array<IError> | null;
settings: Array<IError> | null;
}

interface IEmployOnMutationArguments {
id: string;
employ?: IEmployInput | null;
}

interface IApplyEmployOnMutationArguments {
userId: string;
userName: string;
userLastname: string;
email: string;
position: string;
}

interface IDeleteEmployOnMutationArguments {
employId: string;
}

interface IGeneralInformationBusinessOnMutationArguments {
id?: string | null;
information?: IGeneralInformationBusinessInput | null;
}

interface IFeedbackOnMutationArguments {
toId: string;
stars: number;
comment: string;
}

interface IDeleteFeedbackOnMutationArguments {
id: string;
}

interface IPortfolioOnMutationArguments {
id: string;
multimedia?: Array<any> | null;
description: string;
}

interface IUpdatePortfolioOnMutationArguments {
id: string;
idPortfolio: string;
multimedia?: Array<any> | null;
description: string;
}

interface IDeletePortfolioOnMutationArguments {
idPortfolio: string;
}

interface IGeneralInformationOnMutationArguments {
id?: string | null;
information?: IGeneralInformationInput | null;
}

interface INecessityOnMutationArguments {
finished: boolean;
comment: string;
}

interface IUpdateNecessityOnMutationArguments {
id: string;
finished: boolean;
comment: string;
}

interface IDeleteNecessityOnMutationArguments {
id: string;
}

interface ISendForgotPasswordEmailOnMutationArguments {
email: string;
type: string;
}

interface IForgotPasswordChangeOnMutationArguments {
newPassword: string;
key: string;
type: string;
}

interface ILoginOnMutationArguments {
email: string;
password: string;
}

interface IRegisterOnMutationArguments {
name: string;
lastname: string;
telephoneCountry: number;
telephone: any;
identificationDocumentType: string;
identificationDocument: any;
email: string;
password: string;
}

interface IRegisterBusinessOnMutationArguments {
name: string;
telephoneCountry: number;
telephone: any;
sector: string;
email: string;
password: string;
}

interface ISettingsOnMutationArguments {
email: string;
password: string;
newPassword: string;
type: string;
}

interface IEmployInput {
id?: string | null;
position: string;
description: string;
area: string;
skills?: Array<string | null> | null;
minStudy: string;
minExperience: number;
language?: Array<string | null> | null;
travel: string;
residence: string;
country: string;
departament: string;
town: string;
time: string;
contract: string;
minSalary?: any | null;
maxSalary?: any | null;
currency?: string | null;
}

interface IError {
__typename: "Error";
path: string;
message: string;
}

interface IGeneralInformationBusinessInput {
routePhoto?: any | null;
routeCover?: any | null;
name: string;
description?: string | null;
address?: string | null;
telephoneCountry: number;
telephone: any;
telephone2Country?: number | null;
telephone2?: any | null;
departament?: string | null;
town?: string | null;
nationality?: string | null;
sector: string;
website?: string | null;
googleMapsLocalization?: string | null;
optionalEmail?: string | null;
socialnetwork?: Array<ISocialNetworkBusinessInput | null> | null;
memberUser?: Array<string | null> | null;
}

interface ISocialNetworkBusinessInput {
name: string;
url: string;
}

interface IGeneralInformationInput {
routePhoto?: any | null;
routeCover?: any | null;
name: string;
lastname: string;
description?: string | null;
identificationDocumentType: string;
identificationDocument: any;
address?: string | null;
telephoneCountry: number;
telephone: any;
telephone2Country?: number | null;
telephone2?: any | null;
departament: string;
town: string;
nationality: string;
birth?: any | null;
civilStatus: string;
website?: string | null;
gender: string;
disability?: string | null;
optionalEmail?: string | null;
skills?: Array<string | null> | null;
socialnetwork?: Array<ISocialNetworkInput | null> | null;
language?: Array<ILanguageInput | null> | null;
study?: Array<IStudyInput | null> | null;
work?: Array<IWorkInput | null> | null;
preferWork?: IPreferWorkInput | null;
cv?: Array<any | null> | null;
}

interface ISocialNetworkInput {
name: string;
url: string;
}

interface ILanguageInput {
id?: string | null;
language: string;
level: string;
}

interface IStudyInput {
id?: string | null;
place: string;
level: string;
area?: string | null;
startedOn: any;
finishIn?: any | null;
}

interface IWorkInput {
id?: string | null;
company: string;
job: string;
departament: string;
sector: string;
area: string;
goals?: string | null;
startedOn: any;
finishIn?: any | null;
}

interface IPreferWorkInput {
id?: string | null;
currentSituation: string;
job: string;
area: Array<string>;
salary: any;
currency: string;
departament: Array<string>;
travel: string;
residence: string;
}
}

// tslint:enable
