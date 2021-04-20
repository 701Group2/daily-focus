import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import style from "./style.module.scss";

export default function CategoryItem({ value, text, selected, clickHandler }) {
    return (
        <div
            id={`quoteCategoryValue-${value}`}
            className={selected ? style.selectedCategoryOption : style.categoryOption}
            onClick={() => clickHandler(value)}
        >
            {text}
            {selected ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />}
        </div>
    );
}
