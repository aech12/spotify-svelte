// import { error } from '@sveltejs/kit';

export function load({ params }: any) {
  // if (params.slug === 'hello-world') {
    return {
      code: params
    };
  // }
  // throw error(404, 'Not found');
}