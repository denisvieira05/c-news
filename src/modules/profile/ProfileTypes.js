import Colors from "../../assets/Colors";
import Strings from "../../assets/Strings";

export const UPDATE_MY_INTERESTS = "UPDATE_MY_INTERESTS";
export const IS_FETCHING_MY_INTERESTS = "IS_FETCHING_MY_INTERESTS";
export const IS_SAVING_MY_INTERESTS = "IS_SAVING_MY_INTERESTS";

export const DEFAULT_INTERESTS = {
  POLITICS: {
    id: "POLITICS",
    text: Strings.politics,
    isActive: false,
    color: Colors.red
  },
  BUSINESS: {
    id: "BUSINESS",
    text: Strings.business,
    isActive: false,
    color: Colors.pink
  },
  TECH: {
    id: "TECH",
    text: Strings.tech,
    isActive: false,
    color: Colors.blue
  },
  SCIENCE: {
    id: "SCIENCE",
    text: Strings.science,
    isActive: false,
    color: Colors.green
  },
  SPORTS: {
    id: "SPORTS",
    text: Strings.sports,
    isActive: false,
    color: Colors.yellow
  }
};
