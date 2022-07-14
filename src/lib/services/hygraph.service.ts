import { gql, GraphQLClient } from 'graphql-request';
import { variables } from '$lib/variables';
import type { Post } from '$lib/interfaces/post.interface';

const hygraphClient = new GraphQLClient(variables.hygraphUrl);

export const getPosts = async (): Promise<Post[]> => {
	const query = gql`
		query Posts {
			posts {
				title
				description
				content {
					html
				}
				slug
				createdAt
			}
		}
	`;

	const { posts } = await hygraphClient.request(query);

	return posts;
};
