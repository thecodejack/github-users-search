export function getUserInfo(userName) {
  return fetch(`https://api.github.com/users/${userName || 'thecodejack'}`, {
    method: 'GET',
  }).then((res) => res.json());
}

export function getUserReposInfo(userName) {
  return fetch(
    `https://api.github.com/users/${userName || 'thecodejack'}/repos`,
    {
      method: 'GET',
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
  }).then((res) => res.json());
}
