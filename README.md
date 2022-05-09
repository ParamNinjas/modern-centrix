# Suntec-TMS-Enryption

## Deployment

- ALIAS : [DEV, STAGING, PROD]

initial deployment

    $ npm install -g serverless
    $ npm install --save -D serverless-aws-alias,serverless-plugin-typescript,serverless-offline
    $ sls deploy
 
 after initial deploy
    $ sls deploy --alias <ALIAS>
    $ sls deploy -f <function> --force --alias <ALIAS>
