import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === 'approved') {
      content = comment.content;
    }
    if (comment.status === 'pending') {
      content = 'Comentário pendente';
    }
    if (comment.status === 'rejected') {
      content = 'Comentário rejeitado';
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
