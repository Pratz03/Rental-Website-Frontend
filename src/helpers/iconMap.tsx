import { IconMap } from "./config";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DynamicFeedRoundedIcon from '@mui/icons-material/DynamicFeedRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import DisplaySettingsRoundedIcon from '@mui/icons-material/DisplaySettingsRounded';
import DynamicFormRoundedIcon from '@mui/icons-material/DynamicFormRounded';
import TextFieldsRoundedIcon from '@mui/icons-material/TextFieldsRounded';
import RuleRoundedIcon from '@mui/icons-material/RuleRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import HighQualityRoundedIcon from '@mui/icons-material/HighQualityRounded';

export const iconMap: IconMap = {
    dashboard: <SpaceDashboardRoundedIcon />,
    product: <CategoryRoundedIcon />,
    edit: <EditRoundedIcon />,
    bookings: <DynamicFeedRoundedIcon />,
    users: <PeopleRoundedIcon />,
    settings: <DisplaySettingsRoundedIcon />,
    mail: <MailIcon />,
    inbox: <InboxIcon />,
    form: <DynamicFormRoundedIcon />,
    textfield: <TextFieldsRoundedIcon />,
    select: <RuleRoundedIcon />,
    arrow_down: <KeyboardArrowDownRoundedIcon />,
    cart: <ShoppingCartRoundedIcon />,
    delivery: <DeliveryDiningRoundedIcon />,
    price: <LocalOfferRoundedIcon />,
    quality: <HighQualityRoundedIcon />
}