import image_1 from '../assets/img-1.jpg'
import image_2 from '../assets/img-2.jpg'
import image_3 from '../assets/img-3.jpg'
import image_4 from '../assets/img-4.jpg'
import image_5 from '../assets/img-5.jpg'
import {GrRestroomWomen} from 'react-icons/gr'
import {MdGirl} from 'react-icons/md'
import {AiFillExperiment} from 'react-icons/ai'
import {BsPhoneFill} from 'react-icons/bs'
import {MdComputer} from 'react-icons/md'
import {TbWashMachine} from 'react-icons/tb'
import {PiWatchFill} from 'react-icons/pi'
import {AiTwotoneHome} from 'react-icons/ai'
import {PiBagSimpleFill} from 'react-icons/pi'
import {FiDribbble} from 'react-icons/fi'
import {MdHealthAndSafety} from 'react-icons/md'

export const images = [image_1,image_2,image_3,image_4,image_5];
export const searchCategories = [
  {name : "Women's Fashion",icon : <MdGirl/>,databaseName : 'womenfashion'},
  {name : "Men's Fashion",icon : <AiFillExperiment/>, databaseName : 'mensfashion'},
  {name : "Phones & Telecomunications",icon : <BsPhoneFill  />, databaseName : 'phonesandtelecomunications'},
  {name : "Computer ,Office & Security",icon : <MdComputer  />, databaseName : 'computersecurityoffice'},
  {name : "Consumer Electronics",icon : <TbWashMachine  />, databaseName : 'consumerElectronics'},
  {name : "Jewelery & Watches",icon : <PiWatchFill  />, databaseName : 'jeweleryandwatches'},
  {name : "Home,Pet & Appliances",icon : <AiTwotoneHome  />, databaseName : 'homepetandappliances'},
  {name : "Bags & Shoes",icon : <PiBagSimpleFill />, databaseName : 'bagsandshoes'},
  {name : "Toys , Kids & Babies",icon : <FiDribbble />, databaseName : 'toyskidsandbabies'},
  {name : "Beauty Health & Care",icon : <MdHealthAndSafety />, databaseName : 'beautyhealthandcare'},
]

const currencyList = [
  { code: "AFA", name: "Afghan Afghani", symbol: "؋" },
  { code: "ALL", name: "Albanian Lek", symbol: "Lek" },
  { code: "DZD", name: "Algerian Dinar", symbol: "دج" },
  { code: "AOA", name: "Angolan Kwanza", symbol: "Kz" },
  { code: "ARS", name: "Argentine Peso", symbol: "$" },
  { code: "AMD", name: "Armenian Dram", symbol: "֏" },
  { code: "AWG", name: "Aruban Florin", symbol: "ƒ" },
  { code: "AUD", name: "Australian Dollar", symbol: "$" },
  { code: "AZN", name: "Azerbaijani Manat", symbol: "₼" },
  { code: "BSD", name: "Bahamian Dollar", symbol: "$" },
  { code: "BHD", name: "Bahraini Dinar", symbol: ".د.ب" },
  { code: "BDT", name: "Bangladeshi Taka", symbol: "৳" },
  { code: "BBD", name: "Barbadian Dollar", symbol: "$" },
  { code: "BYR", name: "Belarusian Ruble", symbol: "Br" },
  { code: "BEF", name: "Belgian Franc", symbol: "₣" },
  { code: "BZD", name: "Belize Dollar", symbol: "BZ$" },
  { code: "BMD", name: "Bermudan Dollar", symbol: "$" },
  { code: "BTN", name: "Bhutanese Ngultrum", symbol: "Nu." },
  { code: "BTC", name: "Bitcoin", symbol: "₿" },
  { code: "BOB", name: "Bolivian Boliviano", symbol: "Bs." },
  { code: "BAM", name: "Bosnia-Herzegovina Convertible Mark", symbol: "KM" },
  { code: "BWP", name: "Botswanan Pula", symbol: "P" },
  { code: "BRL", name: "Brazilian Real", symbol: "R$" },
  { code: "GBP", name: "British Pound Sterling", symbol: "£" },
  { code: "BND", name: "Brunei Dollar", symbol: "$" },
  { code: "BGN", name: "Bulgarian Lev", symbol: "лв" },
  { code: "BIF", name: "Burundian Franc", symbol: "FBu" },
  { code: "KHR", name: "Cambodian Riel", symbol: "៛" },
  { code: "CAD", name: "Canadian Dollar", symbol: "$" },
  { code: "CVE", name: "Cape Verdean Escudo", symbol: "Esc" },
  { code: "KYD", name: "Cayman Islands Dollar", symbol: "$" },
  { code: "XOF", name: "CFA Franc BCEAO", symbol: "CFA" },
  { code: "XAF", name: "CFA Franc BEAC", symbol: "FCFA" },
  { code: "XPF", name: "CFP Franc", symbol: "₣" },
  { code: "CLP", name: "Chilean Peso", symbol: "$" },
  { code: "CLF", name: "Chilean Unit of Account", symbol: "UF" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
  { code: "COP", name: "Colombian Peso", symbol: "$" },
  { code: "KMF", name: "Comorian Franc", symbol: "CF" },
  { code: "CDF", name: "Congolese Franc", symbol: "FC" },
  { code: "CRC", name: "Costa Rican Colón", symbol: "₡" },
  { code: "HRK", name: "Croatian Kuna", symbol: "kn" },
  { code: "CUC", name: "Cuban Convertible Peso", symbol: "CUC$" },
  { code: "CZK", name: "Czech Republic Koruna", symbol: "Kč" },
  { code: "DKK", name: "Danish Krone", symbol: "kr" },
  { code: "DJF", name: "Djiboutian Franc", symbol: "Fdj" },
  { code: "DOP", name: "Dominican Peso", symbol: "RD$" },
  { code: "XCD", name: "East Caribbean Dollar", symbol: "$" },
  { code: "EGP", name: "Egyptian Pound", symbol: "£" },
  { code: "ERN", name: "Eritrean Nakfa", symbol: "Nfk" },
  { code: "EEK", name: "Estonian Kroon", symbol: "kr" },
  { code: "ETB", name: "Ethiopian Birr", symbol: "Br" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "FKP", name: "Falkland Islands Pound", symbol: "£" },
  { code: "FJD", name: "Fijian Dollar", symbol: "$" },
  { code: "GMD", name: "Gambian Dalasi", symbol: "D" },
  { code: "GEL", name: "Georgian Lari", symbol: "₾" },
  { code: "DEM", name: "German Mark", symbol: "DM" },
  { code: "GHS", name: "Ghanaian Cedi", symbol: "₵" },
  { code: "GIP", name: "Gibraltar Pound", symbol: "£" },
  { code: "GRD", name: "Greek Drachma", symbol: "₯" },
  { code: "GTQ", name: "Guatemalan Quetzal", symbol: "Q" },
  { code: "GNF", name: "Guinean Franc", symbol: "FG" },
  { code: "GYD", name: "Guyanaese Dollar", symbol: "$" },
  { code: "HTG", name: "Haitian Gourde", symbol: "G" },
  { code: "HNL", name: "Honduran Lempira", symbol: "L" },
  { code: "HKD", name: "Hong Kong Dollar", symbol: "$" },
  { code: "HUF", name: "Hungarian Forint", symbol: "Ft" },
  { code: "ISK", name: "Icelandic Króna", symbol: "kr" },
  { code: "INR", name: "Indian Rupee", symbol: "₹" },
  { code: "IDR", name: "Indonesian Rupiah", symbol: "Rp" },
  { code: "IRR", name: "Iranian Rial", symbol: "﷼" },
  { code: "IQD", name: "Iraqi Dinar", symbol: "ع.د" },
  { code: "ILS", name: "Israeli New Sheqel", symbol: "₪" },
  { code: "ITL", name: "Italian Lira", symbol: "₤" },
  { code: "JMD", name: "Jamaican Dollar", symbol: "J$" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥" },
  { code: "JOD", name: "Jordanian Dinar", symbol: "د.ا" },
  { code: "KZT", name: "Kazakhstani Tenge", symbol: "₸" },
  { code: "KES", name: "Kenyan Shilling", symbol: "KSh" },
  { code: "KWD", name: "Kuwaiti Dinar", symbol: "د.ك" },
  { code: "KGS", name: "Kyrgystani Som", symbol: "сом" },
  { code: "LAK", name: "Laotian Kip", symbol: "₭" },
  { code: "LVL", name: "Latvian Lats", symbol: "Ls" },
  { code: "LBP", name: "Lebanese Pound", symbol: "ل.ل" },
  { code: "LSL", name: "Lesotho Loti", symbol: "L" },
  { code: "LRD", name: "Liberian Dollar", symbol: "$" },
  { code: "LYD", name: "Libyan Dinar", symbol: "ل.د" },
  { code: "LTC", name: "Litecoin", symbol: "Ł" },
  { code: "LTL", name: "Lithuanian Litas", symbol: "Lt" },
  { code: "MOP", name: "Macanese Pataca", symbol: "P" },
  { code: "MKD", name: "Macedonian Denar", symbol: "ден" },
  { code: "MGA", name: "Malagasy Ariary", symbol: "Ar" },
  { code: "MWK", name: "Malawian Kwacha", symbol: "MK" },
  { code: "MYR", name: "Malaysian Ringgit", symbol: "RM" },
  { code: "MVR", name: "Maldivian Rufiyaa", symbol: "ރ." },
  { code: "MRO", name: "Mauritanian Ouguiya", symbol: "UM" },
  { code: "MUR", name: "Mauritian Rupee", symbol: "₨" },
  { code: "MXN", name: "Mexican Peso", symbol: "$" },
  { code: "MDL", name: "Moldovan Leu", symbol: "L" },
  { code: "MNT", name: "Mongolian Tugrik", symbol: "₮" },
  { code: "MAD", name: "Moroccan Dirham", symbol: "د.م." },
  { code: "MZM", name: "Mozambican Metical", symbol: "MT" },
  { code: "MMK", name: "Myanmar Kyat", symbol: "K" },
  { code: "NAD", name: "Namibian Dollar", symbol: "$" },
  { code: "NPR", name: "Nepalese Rupee", symbol: "₨" },
  { code: "ANG", name: "Netherlands Antillean Guilder", symbol: "ƒ" },
  { code: "TWD", name: "New Taiwan Dollar", symbol: "NT$" },
  { code: "NZD", name: "New Zealand Dollar", symbol: "$" },
  { code: "NIO", name: "Nicaraguan Córdoba", symbol: "C$" },
  { code: "NGN", name: "Nigerian Naira", symbol: "₦" },
  { code: "KPW", name: "North Korean Won", symbol: "₩" },
  { code: "NOK", name: "Norwegian Krone", symbol: "kr" },
  { code: "OMR", name: "Omani Rial", symbol: "ر.ع." },
  { code: "PKR", name: "Pakistani Rupee", symbol: "₨" },
  { code: "PAB", name: "Panamanian Balboa", symbol: "B/." },
  { code: "PGK", name: "Papua New Guinean Kina", symbol: "K" },
  { code: "PYG", name: "Paraguayan Guarani", symbol: "₲" },];

  // Categories ko direct array me store kare
const categories = ["Electronics", "Clothing", "Books", "Home & Kitchen", "Toys"];

  export {currencyList , categories}
  