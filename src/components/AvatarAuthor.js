import React from "react";
import Colors from "../assets/Colors";
import injectSheet from "react-jss";
import Strings from "../assets/Strings";

const AvatarAuthor = ({ authorImage, authorName, classes }) => (
  <div className={classes.byAuthorContainer}>
  <img className={classes.avatarImgStyle} src={authorImage} alt="Author" />
  <label className={classes.authorNameStyle}>
    {Strings.by} {authorName}
  </label>
</div>
);

const styles = {
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
};

export default injectSheet(styles)(AvatarAuthor);
