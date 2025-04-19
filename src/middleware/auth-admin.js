const authAdmin = (req, res, next) => {
  console.log("admin is being authorized");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("unauthorized");
  } else {
    next();
  }
};

module.exports = { authAdmin };
