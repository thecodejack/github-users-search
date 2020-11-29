export function getUserInfo(userName) {
  return fetch(`https://api.github.com/users/${userName || 'thecodejack'}`, {
    method: 'GET',
    headers: {
      Authorization: `token 0804d2a2a6317b39468a30c82acf2654e5a28772 `,
    },
  }).then((res) => res.json());
}

export function getUserReposInfo(userName) {
  return fetch(
    `https://api.github.com/users/${userName || 'thecodejack'}/repos`,
    {
      method: 'GET',
      headers: {
        Authorization: `token 0804d2a2a6317b39468a30c82acf2654e5a28772 `,
      },
    },
  ).then((res) => res.json());
}

export function getCompleteUserInfo(userName) {
  const promises = [getUserInfo(userName), getUserReposInfo(userName)];
  return Promise.all(promises);
}

export function getRepoInfo(userName, repoName) {
  return fetch(`https://api.github.com/repos/${userName}/${repoName}`, {
    method: 'GET',
    headers: {
      Authorization: `token 0804d2a2a6317b39468a30c82acf2654e5a28772 `,
    },
  }).then((res) => res.json());
}
