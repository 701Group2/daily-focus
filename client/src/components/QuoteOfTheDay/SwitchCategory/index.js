import PropTypes from "prop-types";
import { makeStyles, Fab } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CategoryItem from "./item";
import style from "./style.module.scss";

const useStyles = makeStyles({
    btn: {
        background: "#30A0F5",
    },
});

function SwitchCategory({ categories, cancelClicked, updateCategory, currentCategory }) {
    const classes = useStyles();

    return (
        <div className={style.container}>
            <div className={style.listHolder}>
                {categories.map((cat, index) => (
                    <CategoryItem
                        key={`category-${index}`}
                        value={cat.value}
                        text={cat.text}
                        selected={currentCategory === cat.value ? true : false}
                        clickHandler={() => updateCategory(cat.value)}
                    />
                ))}
            </div>
            <div className={style.settingButtonDiv}>
                <Fab
                    className={style.settingButton}
                    color="primary"
                    size="medium"
                    onClick={() => cancelClicked()}
                    classes={{ root: classes.btn }}
                >
                    <ArrowBackIcon />
                </Fab>
            </div>
        </div>
    );
}

SwitchCategory.propTypes = {
    cancelClicked: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired,
    currentCategory: PropTypes.string.isRequired,
};

export default SwitchCategory;
