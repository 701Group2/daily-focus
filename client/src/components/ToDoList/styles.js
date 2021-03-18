import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        margin: "10px",
        width: "25%"
    },
    listContainer: {
        display: "flex",
        flexDirection: "column"
    },
    todoListTitle: {
        textAlign: "center",
        backgroundColor: "#30A0F5",
        marginBottom: "1.5vh"
    },
    todoListTitleSelect: {
        color: "white"
    },
});

export default useStyles;