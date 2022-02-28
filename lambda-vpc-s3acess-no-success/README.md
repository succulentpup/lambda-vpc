# lambda-vpc

## Lambda is in a VPC, triggered by S3 CreateObject event.

In this example, following resources are created.


- S3 bucket
- VPC
- Private Subnet
- Private RouteTable
- Security Group
- Lambda



Each time a file gets added to 'PrivateCSVFiles/*.csv' of S3 bucket, a CreateObject event will be generated.
This event triggers lambda (parseUsageDetailsPri).
The expected responsibility of the lambda is to read the file, print the contents and exit.
However, it will time out because it is inside the private subnet, it has access to neither internet not S3 bucket(no private connection)
