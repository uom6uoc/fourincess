// MINIC
const API_TOKEN = 'a535eedb120715611f820ed90592ae62';
const APPLICATION_KEY = '02da6741c960a08f749e60e6';
// const SECRET_KEY =

const TOKEN_CONTRACT_ADDRESS =
  'J5vfqoKeyhHjfEvbYLGMeL1bNdTb55purr4AY55aa66smca';

const WALLET_DAEGU_CHAIN = {
  address: '9vhv1qiqwKwk4yZBfsG81tTT8zgmKDTKS6rYqCWduAMPmca',
  privatekey: 'BurPzXEjUowV7ojYk5HuQip1ovmWYWdYMWf8pKfs3wUzmpr',
  publickey: '2AqgU83DSCUtpBo7H5UxvWRENrBSqh7thTcb9ASNgrULampu',
};

const WALLET_CUSTOMER = {
  address: '53X5LvebpgKM77MDNQssp92SVe4dTbp4QoDJhGaDxphBmca',
  privatekey: 'BayupnznmbLnHHu4SF5PVBzwK18LDGsK3rMAxWnXzNg1mpr',
  publickey: 'q7GbAJJjo7JTtsRzCCdFgEGWoXxeKfxGXmBLbpMBZfhAmpu',
};

const WALLET_BOSS = {
  address: '8a7rDWnkEFUbJinAJKWGZt4VAFPAPvZNfRShKDEJ8U8tmca',
  privatekey: '3D6zt4xq8KxhYF72kXhoALAqRVyMqEDrfk1yS9wocfRXmpr',
  publickey: '26AystjoHb5qqmh4LkXgZ3kZEHTo34G27UTZDUMVQnMDnmpu',
};

const WALLET_STORE = {
  address: '6uN5LUW99THHubsTmuM4GtvFsp3TpY6JJfXc333TjWXbmca',
  privatekey: '2apqyaA1dgYYnUKqMhQyjJQMqFVPMEks6s3omqZxj1z5mpr',
  publickey: 'gxkWqF2nCwBnwrFPATaM84zGnGhg8UXVyxSumvQJdgjKmpu',
};

const DID_CUSTOMER = {
  subject: 'DaegurangCustomer',
  did: 'did:mitum:minic:G8DthyoiEHms3QJz63Foahn8Txvkk28PdcvgW3gzxJgVmca',
  jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJEYWVndXJhbmdDdXN0b21lciIsInN1YiI6IlpOSUhYRklSU0NDTFpBWVlBWFZUIiwidmFsIjoiRGFlZ3VyYW5nQ3VzdG9tZXJ8RGFlZ3VyYW5nQ3VzdG9tZXIiLCJhdWQiOiJkaWQ6bWl0dW06bWluaWM6RzhEdGh5b2lFSG1zM1FKejYzRm9haG44VHh2a2syOFBkY3ZnVzNnenhKZ1ZtY2E6NjE0NTA4NTY0NDQ5MjIyMjE3MjUiLCJleHAiOjQxMDI0NDQ3OTksIm5iZiI6MTY5OTQ4ODAwMCwiaWF0IjoxNjk5NTM3ODY3fQ.lZvRje7hXr5dat9avwoPo03H4NL8lRPCvz69SI5be2A',
};

const DID_BOSS = {
  subject: 'DaegurangCustomer',
  did: 'did:mitum:minic:DkFrkYZYPS2Kqj4bHMf8Y5Tv7Tao659N8ocgeCBAFb3tmca',
  jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJEYWVndXJhbmdCb3NzIiwic3ViIjoiT0NFS1RFQkREQk5TSVRaRlJQVk8iLCJ2YWwiOiJEYWVndXJhbmdCb3NzfERhZWd1cmFuZ0Jvc3MiLCJhdWQiOiJkaWQ6bWl0dW06bWluaWM6RGtGcmtZWllQUzJLcWo0YkhNZjhZNVR2N1RhbzY1OU44b2NnZUNCQUZiM3RtY2E6NzQ4MDk3ODg3MTEzNDU3MDE1NjgiLCJleHAiOjQxMDI0NDQ3OTksIm5iZiI6MTY5OTQ4ODAwMCwiaWF0IjoxNjk5NTM4MjMyfQ.3sbb8PMRkVH5rwTylFX6gQQIKZWfTWM6cxl-sSaSLsI',
};

const DID_STORE = {
  subject: 'DaegurangCustomer',
  did: 'did:mitum:minic:DZ8BuAw9XinPv6PatmwvWDSz7Gg8GQkasEr8vAJkfxnfmca',
  jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJEYWVndXJhbmdTdG9yZSIsInN1YiI6IkZMRElVQVZOWUtBUkJSWFpCWk1QIiwidmFsIjoiRGFlZ3VyYW5nU3RvcmV8RGFlZ3VyYW5nU3RvcmUiLCJhdWQiOiJkaWQ6bWl0dW06bWluaWM6RFo4QnVBdzlYaW5QdjZQYXRtd3ZXRFN6N0dnOEdRa2FzRXI4dkFKa2Z4bmZtY2E6ODg2NjI2NjMwMTE1NzgyMDc3NTMiLCJleHAiOjQxMDI0NDQ3OTksIm5iZiI6MTY5OTU3NDQwMCwiaWF0IjoxNjk5NTUyNDk2fQ.Or_xzA8_8cAyzmfhNgwojkjcf4pa0Rj1WTRceYWsqI4',
};
