import { Badge, Link, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { img_500, noPicture } from "../../../config/config";
import YouTubeIcon from "@material-ui/icons/YouTube";
const useStyles = makeStyles({
  item: {
    display: "flex",
    flexDirection: "column",
    objectFit: "contain",
    padding: 10,
    position: "relative",
  },
  img: {
    borderRadius: 10,
    marginBottom: 5,
    boxShadow: "0px 0px 5px black",
  },
  badge: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  title: {
    color: "white",
    fontSize: 30,
  },
  youtube: {
    position: "absolute",
    left: "0",
    top: "0",
    backgroundColor: "white",
    borderRadius: 50,
  },
  youIconLink: {
    height: "100%",
  },
  youIcon: {
    color: "red",
    fontSize: 80,
    textShadow: "2px 2px 8px #FF0000",
  },
});
const handleDragStart = (e) => e.preventDefault();

const PopSingle = ({ name, poster_path, vote_average, id }) => {
  const [showBg, setShowBg] = useState(false);
  const classes = useStyles();

  return (
    <>
      <div
        className={classes.item}
        onDragStart={handleDragStart}
        key={id}
        onMouseOver={() => setShowBg(true)}
        onMouseOut={() => setShowBg(false)}
      >
        {showBg && (
          <div className={classes.youtube}>
            <Link to={`items/${id}`}>
              <YouTubeIcon className={classes.youIcon} />
            </Link>
          </div>
        )}
        <img
          src={poster_path ? `${img_500}/${poster_path}` : noPicture}
          alt={name}
          className={classes.img}
        />
        <Typography variant="h4" className={classes.title}>
          {name}
        </Typography>
        <Badge
          badgeContent={vote_average ? Math.floor(vote_average) + ".0" : "n"}
          className={classes.badge}
          color={
            vote_average
              ? vote_average < 6
                ? "secondary"
                : "primary"
              : "error"
          }
        />
      </div>
    </>
  );
};

export default PopSingle;
