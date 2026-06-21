import prisma from "../db/prisma.js";

///POST CREATION AUTH REQUIRED

export async function createPost(req, res) {
  try {
    const { title, content } = req.body;

    const userId = req.user.id; //from jwt middleware

    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId: userId,
      },
    });

    return res.status(201).json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function getPosts(req, res) {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    });

    return res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function getPost(req, res) {
  try {
    // console.log(req.params);

    const { id } = req.params;

    const post = await prisma.post.findUnique({
      where: { id: Number(id) },
      include: {
        author: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    });

    // console.log(post);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function updatePost(req, res) {
  try {
    const { id } = req.params;

    const { title, content } = req.body;

    const post = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    if (post.authorId !== req.user.id) {
      return res.status(403).json({
        message: "Not Authorized",
      });
    }

    const updatePost = await prisma.post.update({
      where: {
        id: Number(id),
      },

      data: {
        title,
        content,
      },
    });

    return res.json(updatePost);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
}

export async function deletePost(req, res) {
  try {
    const { id } = req.params;

    const post = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    if (post.authorId !== req.user.id) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }

    await prisma.post.delete({
      where: {
        id: Number(id),
      },
    });

    return res.json({
      message: "Post deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
}

export async function togglePublishPost(req, res) {
  try {
    const { id } = req.params;

    const post = await prisma.post.findUnique({
      where: { id: Number(id) },
    });

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    if (post.authorId !== req.user.id) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }

    const updatedPost = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        published: !post.published,
      },
    });

    return res.json(updatedPost);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
}
