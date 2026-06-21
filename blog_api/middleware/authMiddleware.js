import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  //   console.log("from auth middleware", req.headers);

  if (!authHeader) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  // Format: "Bearer tokenhere" and it gives the element in pos 1
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Invalid token format",
    });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decode; //attach user info to request

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
}
