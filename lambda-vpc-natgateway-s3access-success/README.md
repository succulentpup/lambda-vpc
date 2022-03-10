# lambda-vpc

## Lambda is in a VPC, triggered by S3 CreateObject event.

![Alt text](./architecture.svg?raw=true&sanitize=true "architecture diagram")

In this example, following resources are created.


- S3 bucket
- VPC
- Private Subnet (CidrBlock: 10.0.3.0/24)
- Public Subnet (10.0.4.0/24)
- Security Group
- EIP
- NatGateway
- Private RouteTable
- Private Route
- Internet Gateway
- VPC Gateway
- Public RouteTable
- Public Route
- Lambda


The above set of resources help to configure the VPC with public subnet and private subnet.
Public subnet is needed because we wanted to allow private subnet to reach internet.
To allow private subnet to reach internet, one of the ways is to configure it with NatGateway. NatGateway should be put inside public subnet.



Each time a file gets added to 'PrivateCSVFiles/*.csv' of S3 bucket, a CreateObject event will be generated.
This event triggers lambda (parseUsageDetailsPri).
The expected responsibility of the lambda is to read the file, print the contents and exit.