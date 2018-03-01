/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export class AuctionDetails {

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface AuctionDetails {
  minCost: number;
  isPart: boolean;
  zakupkiObjectDetails: ZakupkiObjectDetails;
  projectDescriptionLink: string;
  descriptionCleaned: string;
}

interface ZakupkiObjectDetails {
  id: number;
  bets: Bet[];
  name: string;
  okei?: any;
  step: number;
  type: Type;
  state: State;
  offers: Offer2[];
  company: Company3;
  endDate: string;
  maxDays: number;
  currency: Currency;
  minValue: number;
  repeatId?: any;
  requestId: number;
  startCost: number;
  startDate: string;
  unpublish?: any;
  description: string;
  isAutomatic: boolean;
  lastBetCost: number;
  nextMaxCost: number;
  nextMinCost: number;
  offerSignTime?: any;
  minCostPerUnit?: any;
  afterOfferItems?: any;
  lastBetSupplier: Supplier;
  offerCreateTime?: any;
  companyCustomerId: number;
  companySupplierId?: any;
  lastBetServerTime: string;
  offerAuctionRegion: OfferAuctionRegion[];
  uniqueSupplierCount: number;
  productionDirectoryId?: any;
  offerAuctionCharacteristics: any[];
  offerContractItemContractId?: any;
  offerContractItemContractRegisterNumber?: any;
}

interface OfferAuctionRegion {
  region: Region;
  offerAuctionId: number;
}

interface Company3 {
  id: number;
  inn: string;
  kpp: string;
  name: string;
  ogrn: string;
  okfs: string;
  okpo: string;
  type: Type2;
  okato: string;
  okogu?: any;
  oktmo: string;
  okved: string;
  snils?: any;
  oksmId?: any;
  ikoCode?: any;
  okopfId: number;
  oksmName?: any;
  companyFL?: any;
  companyIP?: any;
  dateOnTax: string;
  indexCode?: any;
  okopfCode: string;
  okopfName: string;
  shortName: string;
  companyFio?: any;
  customerId: number;
  supplierId?: any;
  citizenship?: any;
  description?: any;
  legalAddress: string;
  taxPayerCode?: any;
  fullNameLatin?: any;
  oksmAlpha2Code?: any;
  oksmAlpha3Code?: any;
  companyAccounts: any[];
  isSmallBusiness: boolean;
  isSocialVenture: boolean;
  registrationDate: string;
  successorCompanyId?: any;
  firstUserCreateDate?: any;
  isDisabledPeopleOrg: boolean;
  isCorrectionalSystem: boolean;
}

interface Offer2 {
  id: number;
  offer: Offer;
  currentValue: number;
  offerAuctionId: number;
  previousOfferId?: any;
}

interface Offer {
  id: number;
  name: string;
  okei: Okei;
  spgz?: any;
  tags: Tag[];
  user: User;
  images: Image[];
  number: string;
  deleted: boolean;
  maxDays: number;
  minDays: number;
  ndsRate: NdsRate;
  advanced: boolean;
  currency: Currency;
  maxValue?: any;
  minValue: number;
  nextCost: number;
  supplier: Supplier2;
  fameIndex?: any;
  openCount?: any;
  overprice?: any;
  codeNumber: string;
  givingDate: string;
  modifyTime: string;
  offerPrice: OfferPrice[];
  offerState: OfferState;
  production: Production;
  sourceFile?: any;
  attachments: any[];
  costPerUnit: number;
  description: string;
  offerRegion: OfferRegion[];
  packageType: OfferState;
  creationTime: string;
  factMaxValue?: any;
  modifyUserId: number;
  offerComment?: any;
  offerEndDate: string;
  modifyComment?: any;
  servicePeriod?: any;
  termsOfSupply?: any;
  contractsCount?: any;
  offerBeginDate: string;
  valueUnlimited: boolean;
  contractProject: Image[];
  nextCostPerUnit: number;
  numbersInPackage: number;
  offerAuctionItems?: any;
  packageTypeComment?: any;
  spgzUnitMultiplier?: any;
  offerCharacteristics: OfferCharacteristic[];
  costPerUnitWithoutNds?: any;
  productionDirectoryId: number;
  isAvailableToIndividuals: boolean;
  isVisibleToStateCustomers: boolean;
  offerAuctionsFirstOfferAuctionIsAutomatic: boolean;
  offerAuctionsFirstOfferAuctionOfferSignTime?: any;
}

interface OfferCharacteristic {
  id: number;
  offerId: number;
  characteristicValueId: number;
  productCharacteristicId: number;
  productCharacteristicName: string;
  characteristicValueIntValue?: any;
  characteristicValueBoolValue?: any;
  productCharacteristicValueId: number;
  characteristicValueStringValue: string;
  characteristicValueDecimalValue?: any;
  characteristicValueDateTimeValue?: any;
  productCharacteristicUnitShortName?: any;
  productCharacteristicDescriptionTypeId: number;
}

interface OfferRegion {
  region: Region;
  offerId: number;
}

interface Region {
  id: number;
  uno?: any;
  code: string;
  name: string;
  socr: string;
  ocatd: string;
  gninmb: string;
  deleted: boolean;
  socrName?: any;
  treePath: string;
  postIndex?: any;
  modifyTime: string;
  treePathId: string;
  description?: any;
  isLastLevel: boolean;
  parentRegionId: number;
}

interface Production {
  id: number;
  code: string;
  name: string;
}

interface OfferState {
  id: number;
  name: string;
  deleted: boolean;
  sortOrder?: any;
  modifyTime: string;
}

interface OfferPrice {
  id: number;
  offerId: number;
  startValue: number;
  costPerUnit: number;
  costPerUnitWithoutNds?: any;
}

interface Supplier2 {
  id: number;
  region?: any;
  company: Company2;
  stateId: number;
  offerCount?: any;
  eaStarsLeft?: any;
  achievements: any[];
  contactInfos: ContactInfo[];
  eaStarsTotal?: any;
  contractCount?: any;
  companyAccounts: CompanyAccount[];
  massImportSettings?: any;
  individualsSettings: IndividualsSettings;
  extensionEntityRefId?: any;
  contractExecutedCount?: any;
  contractConcludedCount?: any;
  contractTerminatedCount?: any;
}

interface IndividualsSettings {
  id: number;
  agreement?: any;
  deliveryPrice?: any;
  deliveryTerms?: any;
  deliveryMethods: any[];
}

interface ContactInfo {
  id: number;
  fax: string;
  web: string;
  email: string;
  phones: Phone[];
  fullName: string;
  indexCode?: any;
  timeZoneId: string;
  factAddress: string;
  postAddress?: any;
  fullNameLast: string;
  fullNameFirst: string;
  fullNamePatronym: string;
  timeZoneOffsetTicks: number;
}

interface Phone {
  id: number;
  phoneType: Type2;
  phoneNumber: string;
  contactInfoId: number;
}

interface Company2 {
  id: number;
  inn: string;
  kpp: string;
  name: string;
  ogrn: string;
  okfs?: any;
  okpo: string;
  type: Type2;
  okato: string;
  okogu?: any;
  oktmo: string;
  okved: string;
  snils?: any;
  oksmId?: any;
  ikoCode?: any;
  okopfId: number;
  oksmName?: any;
  companyFL?: any;
  companyIP?: any;
  dateOnTax: string;
  indexCode?: any;
  okopfCode: string;
  okopfName: string;
  shortName: string;
  companyFio?: any;
  customerId?: any;
  supplierId: number;
  citizenship?: any;
  description?: any;
  legalAddress: string;
  taxPayerCode?: any;
  fullNameLatin?: any;
  oksmAlpha2Code?: any;
  oksmAlpha3Code?: any;
  companyAccounts: CompanyAccount[];
  isSmallBusiness: boolean;
  isSocialVenture: boolean;
  registrationDate: string;
  successorCompanyId?: any;
  firstUserCreateDate?: any;
  isDisabledPeopleOrg: boolean;
  isCorrectionalSystem: boolean;
}

interface CompanyAccount {
  id: number;
  bik: string;
  bankCity: string;
  bankName: string;
  companyId: number;
  bankAddress?: any;
  contractUse: boolean;
  currentAccount?: string;
  personalAccount: string;
  correspondentAccount: string;
}

interface Type2 {
  id: number;
  code: string;
  name: string;
  description?: any;
}

interface Currency {
  id: number;
  name: string;
  deleted: boolean;
  shortName: string;
  sortOrder?: any;
  codeNumber: string;
  codeSymbol: string;
  modifyTime: string;
}

interface NdsRate {
  id: number;
  name: string;
  rate: number;
  deleted: boolean;
  sortOrder?: any;
  modifyTime: string;
}

interface Image {
  id: number;
  parentId: number;
  fileStorage: FileStorage;
}

interface FileStorage {
  id: number;
  name: string;
  fileUrl?: any;
  fileHash: string;
  fileName: string;
  fileSize: number;
  fileFolder?: any;
  signatures: any[];
  description?: any;
}

interface User {
  id: number;
  name: string;
  description: string;
}

interface Tag {
  id: number;
  offerId: number;
  offerTag: OfferTag;
}

interface OfferTag {
  id: number;
  tag: Type;
}

interface Okei {
  id: number;
  code: string;
  name: string;
  parentId: number;
  parentName: string;
  childsCount: number;
  description?: any;
  designationNational: string;
}

interface State {
  id: number;
  code: string;
  name: string;
  description: string;
  stateMachine: StateMachine;
}

interface StateMachine {
  id: number;
  code: string;
  name: string;
  description: string;
}

interface Type {
  id: number;
  name: string;
  deleted: boolean;
  sortOrder: number;
  modifyTime: string;
}

interface Bet {
  id: number;
  num: number;
  cost: number;
  supplier: Supplier;
  serverTime: string;
  offerAuctionId: number;
  serverDateTime: string;
}

interface Supplier {
  id?: any;
  region?: any;
  company: Company;
  stateId?: any;
  offerCount?: any;
  eaStarsLeft?: any;
  achievements?: any;
  contactInfos?: any;
  eaStarsTotal?: any;
  contractCount?: any;
  companyAccounts?: any;
  massImportSettings?: any;
  individualsSettings?: any;
  extensionEntityRefId?: any;
  contractExecutedCount?: any;
  contractConcludedCount?: any;
  contractTerminatedCount?: any;
}

interface Company {
  id?: any;
  inn?: any;
  kpp?: any;
  name: string;
  ogrn?: any;
  okfs?: any;
  okpo?: any;
  type?: any;
  okato?: any;
  okogu?: any;
  oktmo?: any;
  okved?: any;
  snils?: any;
  oksmId?: any;
  ikoCode?: any;
  okopfId?: any;
  oksmName?: any;
  companyFL?: any;
  companyIP?: any;
  dateOnTax?: any;
  indexCode?: any;
  okopfCode?: any;
  okopfName?: any;
  shortName?: any;
  companyFio?: any;
  customerId?: any;
  supplierId?: any;
  citizenship?: any;
  description?: any;
  legalAddress?: any;
  taxPayerCode?: any;
  fullNameLatin?: any;
  oksmAlpha2Code?: any;
  oksmAlpha3Code?: any;
  companyAccounts?: any;
  isSmallBusiness: boolean;
  isSocialVenture: boolean;
  registrationDate: string;
  successorCompanyId?: any;
  firstUserCreateDate?: any;
  isDisabledPeopleOrg: boolean;
  isCorrectionalSystem: boolean;
}
