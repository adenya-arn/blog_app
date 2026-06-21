import prisma from "../db/prisma.js";

export async function createComment(req, res) {
  try {
    const { id: postId } = req.params;
    const { content } = req.body;

    if (!content) {
      return req.status(400).json({
        message: "Comment cannot be empty",
      });
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        postId: Number(postId),
        userId: req.user.id,
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    });

    return res.status(201).json(comment);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
}

export async function getCommentsByPost(req, res) {
  try {
    const { id: postId } = req.params;

    const comments = await prisma.comment.findMany({
      where: {
        postId: Number(postId),
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.json(comments);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
}
