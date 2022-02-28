# lambda-vpc

## Lambda is in a VPC, triggered by S3 CreateObject event.

In this example, following resources are created.


- S3 bucket
- VPC
- Private Subnet (10.0.5.0/24)
- Security Group
- Private RouteTable
- VPCEndpoint of gateway type for S3 service.
- Lambda


The above set of resources help to configure the VPC with a private subnet.
VPCEndpoint of gateway type for S3 service lets the lambda access S3 service without reaching the internet.


Each time a file gets added to 'PrivateCSVFiles/*.csv' of S3 bucket, a CreateObject event will be generated.
This event triggers lambda (parseUsageDetailsPri).
The expected responsibility of the lambda is to read the file, print the contents and exit.