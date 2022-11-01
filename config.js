// const FirebaseDetails = {

//     "type": "service_account",
//     "project_id": "ecommerce-6bfd3",
//     "private_key_id": "c4576a4902fe026cdc3db8b37584675be67c0f0e",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCf4w79oDyONEwF\nESe8ygFPHkXtSCHt6CO8KZBYg10fLZyMl6OAOTiR02E9imRvkosHS95PiJ+2+m+j\nU6WdRZXTvx8Gto79P7Ele7aahbOf5a/8T/TbXGC5t5izlIBz9mUruLWP1JcWB4BR\ne/lkSyp5NSMDCvjvILvTLGYyxuzt48oQww6cSKbExqFEcugIVrulRsjeSEVkaTGO\n1mDGi3GmUaITMBK++95bxi1Ox6frC3Ljg04QL0QudRKzTAps5nsvSi0VuZXNeJ+p\nrAw3kA0qzrizt51rlHZ2h6OxKR6Oai4V/XvSSnRfnEeSnfhfU9vdzk6MPsHdW9wl\nYXIuLoXjAgMBAAECggEABo+5YkQsqANSaVTSZid+FUKfSQUQS2Se7s5f25oMfMaQ\n6Z4hehYfEbD0iSOASqnfZb3B0k6/izFM2o2IuuMLqoRp4Asm5BK0kN66WC4LeJDi\n/35ChKwOViDINfpuqROgBELQxKXLS36kT/PAANMq242IMcxF+f5EZv6n9QZ/26VQ\nWwK+pwk5BGt625ADf3qaYgdo0Mf7xMT+X5n0lj3jPY7IHj2I7LpBGli2SRdCDzuN\nuSgOtmwHXWHjpFjWjxw4NCWnSkrjzrlJHkQhhx6VD+Q9ZhCS8VtcTQ1PaPN0MAVm\nVCLtXi1pyr85CLPmjaQiIFq0x32h2QBbGcCvhGpgLQKBgQDTXuOZJoVf28axzvii\n+fPOr3md4U+xckLaScCbxM78WqWpVgG5houQYMpAaayfeBfcv/NPRWwhqnM/25LT\nKKX8z/AmT0nGz5xlwNqHRg2xwYEbM7uQwGvDcqby6VPvv8AyXEL72AP6KInLrbX5\n/m3N4U/Xg0vxGhPDwADuVC8HnQKBgQDBpVi1fialITTtUC1m8Vhru+axOnrJReM4\nzTdBulmQDDqW7y+qVzbIC6i4nAwG7U0Qhtx9Ju0JWQHGEL2/AVujmjy3KHXLsmrU\nDnzrYt0xoKwPBtESn82XnDXurG6z+TQQPAMsWQFUFArwBuS7pl2tO2Eu0YL9DweM\n2DDBC74LfwKBgQCV6uB9GLBSrBwCs2zwk15Uw2r8CvmuPv+hudvN38p7fIOxVlpE\nz2Qf1Da/dvRD6zbpkI+vMusd+bpimYdLE7KfXJDVazlFtK0WErIsbgh6gmfi9k9b\nvM7yQlidQ9cP3i4gygWMgMtZW/VYLG480TPqaZtqnSp46GkKVx2R7M2qlQKBgF/2\n7xVSZRhkcnRAzZ88b5NEVTjzQDJKviZCHOYn0Ya/aLGv6zFBc1aD4KNMQfGU3CIa\nk146UjHVuDlNxprHs4BKSViDZo0B6EsauvFz1yZm952ixS2zoBFISrnzHhF2qER7\nWR87JJtkK190KxqLgdT9nlWzYnTCY/16jf69MPtFAoGAL9B13P23wq+99OaW3OyS\nNUVI6ZJkvKH27P0UvYhM635BhDlHWfBA/ZK7n9bieZ/bnFwWOAFpgeMJwD+uSwau\nktD7U9MIk0NlTNIlc2173g8KVqDHqT5ZcU9+OllUF6pVidgMHjZaYIOzREMQrK6E\nAqsH9YX/JOI+K+GVNoBdsB8=\n-----END PRIVATE KEY-----\n",
//     "client_email": "firebase-adminsdk-a2qiu@ecommerce-6bfd3.iam.gserviceaccount.com",
//     "client_id": "113600568595225254119",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-a2qiu%40ecommerce-6bfd3.iam.gserviceaccount.com"
  
  
// };


// export default FirebaseDetails;


export default {

    mongoDB: {
        uri: `mongodb://localhost:27017/ecommerce`,
        options: {
            serverSelectionTimeoutMS: 5000,
        },

    },

};