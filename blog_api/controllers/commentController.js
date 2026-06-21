import prisma from "../db/prisma.js";

export async function createComment(req, res) {
  try {
    const { id: postId } = req.params;
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({
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

export async function deleteComment(req, res) {
  try {
    const { id } = req.params;

    const comment = await prisma.comment.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!comment) {
      return res.status(404).json({
        message: "Comment not found",
      });
    }

    // only comment owner OR post owner can delete
    const post = await prisma.post.findUnique({
      where: {
        id: comment.postId,
      },
    });

    if (comment.userId !== req.user.id && post.authorId !== req.user.id) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }

    await prisma.comment.delete({
      where: {
        id: Number(id),
      },
    });

    return res.json({
      message: "Comment deleted",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
}

export async function updateComment(req, res) {
  try {
    const { id } = req.params;
    const { content } = req.body;

    const comment = await prisma.comment.findUnique({
      where: { id: Number(id) },
    });

    if (!comment) {
      return res.status(404).json({
        message: "Comment not found",
      });
    }

    if (comment.userId !== req.user.id) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }

    const updated = await prisma.comment.update({
      where: { id: Number(id) },
      data: { content },
    });

    return res.json(updated);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
}
