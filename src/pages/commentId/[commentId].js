import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCommentById } from "../../services/api/commentApi";

const CommentDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [comment, setComment] = useState(null);

  useEffect(() => {
    async function fetchComment() {
      try {
        const commentData = await getCommentById(id);
        setComment(commentData);
      } catch (error) {
        console.error("Failed to fetch comment:", error);
      }
    }

    if (id) {
      fetchComment();
    }
  }, [id]);

  return (
    <div>
      {comment ? (
        <div>
          <p>{comment.content}</p>
          {/* Affichez d'autres détails du commentaire ici */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CommentDetails;
