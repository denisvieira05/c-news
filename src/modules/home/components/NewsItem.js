import React from "react";
import Colors from "../../../assets/Colors";
import Strings from "../../../assets/Strings";
import { DEFAULT_INTERESTS } from "../../profile/ProfileTypes";
import injectSheet from "react-jss";

const NewsItem = ({
  classes,
  categoryName,
  title,
  image,
  author,
  authorImage,
  description,
  isFeaturedStyle,
  style
}) => (
  <div className={classes.mainContainerStyle}>
    <label className={classes.categoryNameStyle}>{categoryName}</label>

    {image ? (
      <div className={classes.newsMainImageContainer}>
        <div className={classes.readMoreContainer}>
          <div className={classes.blackTransparentContainer} />
          <label className={classes.readMoreText}>{Strings.readMore}</label>
        </div>
        <img alt="New" className={classes.newsMainImageStyle} src={image} />
      </div>
    ) : null}

    <h3 className={classes.itemTitle}>{title}</h3>

    <div className={classes.byAuthorContainer}>
      <img className={classes.avatarImgStyle} src={authorImage} alt="Author" />
      <label className={classes.authorNameStyle}>
        {Strings.by} {author}
      </label>
    </div>

    <p className={classes.descriptionTextStyle}>{description}</p>
  </div>
);

const getCategoryNameStyle = categoryName => {
  const defaultCategories = Object.values(DEFAULT_INTERESTS);
  const category = defaultCategories.filter(item => item.id === categoryName);

  if (category[0]) {
    return category[0].color;
  }
};

const styles = {
  "@media screen and (max-width: 750px)": {
    mainContainerStyle: {
      width: "100% !important"
    },
    newsMainImageStyle: {
      width: "100% !important"
    }
  },
  "@media screen and (max-width: 320px)": {
    descriptionTextStyle: {
      display: "block !important"
    },
    itemTitle: {
      fontSize: "1.125em !important"
    }
  },
  itemTitle: props => ({
    fontSize: props.isFeaturedStyle ? "1.813em" : "1.125em"
  }),
  categoryNameStyle: props => ({
    textTransform: "uppercase",
    marginBottom: "0.313em",
    fontSize: "0.875em",
    color: getCategoryNameStyle(props.categoryName)
  }),
  mainContainerStyle: props => ({
    ...props.style,
    display: "flex",
    flexDirection: "column",
    width: props.isFeaturedStyle ? "34.688em" : "16.375em"
  }),
  newsMainImageStyle: props => ({
    width: props.isFeaturedStyle ? "34.688em" : "16.375em",
    height: props.isFeaturedStyle ? "22.125em" : "10.438em"
  }),
  descriptionTextStyle: props => ({
    color: Colors.textGray,
    fontSize: "0.875em",
    display: props.isFeaturedStyle ? "none" : "block"
  }),
  readMoreContainer: {
    position: "absolute",
    display: "flex",
    border: "1px solid " + Colors.white,
    cursor: "pointer",
    visibility: "hidden"
  },
  readMoreText: {
    color: Colors.white,
    margin: "1em 2em",
    cursor: "pointer",
    zIndex: 0
  },
  blackTransparentContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: "0.3",
    zIndex: 0
  },
  newsMainImageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover $readMoreContainer": {
      visibility: "visible"
    }
  },
  byAuthorContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  avatarImgStyle: {
    width: "32px",
    height: "32px",
    borderRadius: "50%"
  },
  authorNameStyle: {
    color: Colors.lightGray,
    fontStyle: "italic",
    fontSize: "0.813em",
    marginLeft: "0.5em"
  },
  newsTitleStyle: {
    fontSize: "1.125em"
  }
};

export default injectSheet(styles)(NewsItem);
