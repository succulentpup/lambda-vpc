## Folder structure of this repository

It has 4 folders at the parent level.

- lambda-vpc-natgateway-s3access-success
  - This service creates a vpc, private subnet, public subnet & NatGateway
  - For more details, see [README](./lambda-vpc-natgateway-s3access-success/README.md)
- lambda-vpc-s3access-no-success
  - This service creates a vpc, private subnet. Private subnet has no access to internet
  - For more details, see [README](./lambda-vpc-s3acess-no-success/README.md)
- lambda-vpc-vpcendpoint-s3access-success
  - This service creates a vpc, private subnet & VPCEndpoint of gateway type for S3 service
  - For more details, see [README](./lambda-vpc-vpcendpoint-s3access-success/README.md)
- s3bucket-usagedetails
  - It's a shared service to manage the shared resources like AWS EventBridge, AWS S3, etc.
  - For more details, see [README](./s3bucket-usagedetails/README.md)
