import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {
  putDislikeComment,
  putLikeComment,
} from '../../../api/commentAPI';
import { PostComment } from '../../../interfaces/comment';
import { queryClient } from '../../../main';
import { errorToast, successToast } from '../../../utils/errorToast';

export const useMutateUserComment = (
  postId: string,
  commentId: string,
  setPostComment: React.Dispatch<React.SetStateAction<PostComment>>
) => {
  const putLikeMutation = useMutation(
    ['putLikeCommentMutation'],
    () => putLikeComment(postId, commentId),
    {
      onSuccess: (data: PostComment) => {
        successToast('Success');
        setPostComment({ ...data });
        queryClient.invalidateQueries(['postComment']);
      },
      onError: (err: AxiosError) => {
        console.log(err);
        if (err?.response?.status === 401) {
          errorToast('Please Login First');
        } else {
          errorToast('An error has occurred');
        }
      },
    }
  );

  const putDislikeMutation = useMutation(
    ['putDislikeCommentMutation'],
    () => putDislikeComment(postId, commentId),
    {
      onSuccess: (data) => {
        successToast('Success');
        setPostComment({ ...data });
        queryClient.invalidateQueries(['postComment']);
      },
      onError: (err: AxiosError) => {
        console.log(err);
        if (err?.response?.status === 401) {
          errorToast('Please login first');
        } else {
          errorToast('An error has occurred');
        }
      },
    }
  );

  return { putLikeMutation, putDislikeMutation };
};
