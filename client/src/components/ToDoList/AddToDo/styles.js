import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    todoListTitle: {
        textAlign: "center",
        backgroundColor: "#30A0F5",
        color: "white",
        marginBottom: "1.5vh",
        paddingTop: "2.3vh",
        paddingBottom: "2.3vh"
    },
    todoInputTextField: {
        [`& fieldset`]: {
            borderRadius: "40px"
        }
    },
    primaryButton: {
        backgroundColor: "#30A0F5",
        color: "white",
        borderRadius: "20px" 
    },
    cardActions: {
        justifyContent: "flex-end"
    },
    cancelButton: {
        backgroundColor: "white",
        color: "black",
        borderColor: "#30A0F5",
        borderRadius: "20px"
    }
});

export default useStyles;