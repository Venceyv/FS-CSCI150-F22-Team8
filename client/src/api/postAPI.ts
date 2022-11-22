import axios from './axiosConfig';
import { URL } from '../data/Constants';
import { IntervalItem, MenuItem, Post, TrendingPost } from '../interfaces/post';

export const getTrendingPosts = async (): Promise<TrendingPost[]> => {
  const {
    data: { dbBack: trendingPost },
  } = await axios.get(`${URL}/posts/trending?q=4&type=trending`);
  return trendingPost as TrendingPost[];
};

export const getPosts = async (
  pageNum: number,
  sortType: MenuItem,
  timeInterval: IntervalItem = 'allTime'
): Promise<Post[]> => {
  let interval;

  if (timeInterval !== 'allTime' && sortType !== 'new') {
    switch (timeInterval) {
      case 'today':
        interval = 'a_day';
        break;
      case 'week':
        interval = 'a_week';
        break;
      case 'month':
        interval = 'a_month';
        break;
      case 'year':
        interval = 'a_year';
        break;
    }
  }

  const queryUrl =
    sortType === 'new' || timeInterval === 'allTime'
      ? `${URL}/posts?pagenumber=${pageNum}&pagesize=10&type=posts&sort=${sortType}`
      : `${URL}/posts?pagenumber=${pageNum}&pagesize=10&type=posts&timeInterval=${interval}&sort=${sortType}`;

  try {
    const {
      data: { dbBack: posts },
    } = await axios.get(queryUrl);
    return posts as Post[];
  } catch (err) {
    throw err;
  }
};