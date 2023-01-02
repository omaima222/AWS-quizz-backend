
// let questions = [
//     {
//         'question' :   'Why is AWS more economical than traditional data centers for applications with varying compute workloads?',
//         options :[
//             { option :   'Amazon EC2 costs are billed on a monthly basis'},
//             { option :   'Users retain full administrative access to their Amazon EC2 instances'},
//             { option :   'Amazon EC2 instances can be launched on demand when needed'},
//             { option :   'Users can permanently run enough instances to handle peak workloads'}
//         ],    
//         'explanation' :[
//             {question :   'Why is AWS more economical than traditional data centers for applications with varying compute workloads?'},
//             {exp: 'The ability to launch instances on demand when needed allows users to launch and terminate instances inresponse to a varying workload. This is a more economical practice than purchasing enough on-premises serversto handle the peak load'},
//             {corr:'C'},
//             {answer : 'Amazon EC2 instances can be launched on demand when needed'},
//         ],

//     },
//     {
//         'question' :   'Which AWS service would simplify the migration of a database to AWS?',
//         options :[
//             { option :   'AWS Storage Gateway'},
//             { option :   'AWS Database Migration Service (AWS DMS)'},
//             { option :   'Amazon EC2'},
//             { option :   'Amazon AppStream 2.0'}
//         ],    
//         'explanation' :[
//             { question :   'Which AWS service would simplify the migration of a database to AWS?'},
//             {exp :'AWS DMS helps users migrate databases to AWS quickly and securely. The source database remainsfully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.'},
//             {corr : 'B'},
//             {answer :   'AWS Database Migration Service (AWS DMS)'},
//         ],

//     },
//     {
//         'question' :   'Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?',
//         options :[
//             { option :   'AWS Config'},
//             { option :   'AWS OpsWorks'},
//             { option :   'AWS SDK'},
//             { option :   'AWS Marketplace'}
//         ],    
//         'explanation' :[
//             {question :   'Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?'},
//             {exp :'AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS.'},
//             {corr:'D'},
//             {answer :   'AWS Marketplace'}

//         ],
//     },
//     {
//         'question' :   'Which AWS networking service enables a company to create a virtual network within AWS?',
//         options :[
//             { option :   'AWS Config'},
//             { option :   'Amazon Route 53'},
//             { option :   'AWS Direct Connect'},
//             { option :   'Amazon Virtual Private Cloud (Amazon VPC)'}
//         ],    
//         'explanation' :[
//             {question :   'Which AWS networking service enables a company to create a virtual network within AWS?'},
//             {exp :'Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define.'},
//             {corr :'D'},
//             {answer :   'Amazon Virtual Private Cloud (Amazon VPC)'}
//         ],
//     },
//     {
//         'question' :   'Which of the following is an AWS responsibility under the AWS shared responsibility model?',
//         options :[
//             { option :   'Configuring third-party applications'},
//             { option :   'Maintaining physical hardware '},
//             { option :   'Securing application access and data'},
//             { option :   'Managing guest operating systems'}
//         ],    
//         'explanation' :[
//             {question :   'Which of the following is an AWS responsibility under the AWS shared responsibility model?'},
//             {exp: 'Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model.'},
//             {corr:'B'},
//             {answer :   'Maintaining physical hardware '},
//         ],

//     },
//     {
//         'question' :   'Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?',
//         options :[
//             { option :   'AWS Regions'},
//             { option :   'Edge locations'},
//             { option :   'Availability Zones'},
//             { option :   'Virtual Private Cloud (VPC)'}
//         ],    
//         'explanation' :[
//             {question :   'Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?'},
//             {exp :'To deliver content to users with lower latency, Amazon CloudFront uses a global network of points ofpresence (edge locations and regional edge caches) worldwide. '},
//             {corr:'B'},
//             {answer : 'Edge locations'},
//             ],

//     },
//     {
//         'question' :   'How would a system administrator add an additional layer of login security to a user s AWS Management Console?',
//         options :[
//             { option :   'Use Amazon Cloud Directory'},
//             { option :   'Audit AWS Identity and Access Management (IAM) roles'},
//             { option :   'Enable multi-factor authentication'},
//             { option :   'Enable AWS CloudTrail'}
//         ],    
//         'explanation' :[
//             { question :   'How would a system administrator add an additional layer of login security to a user s AWS Management Console?'},
//             {exp :'Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their username and password (the first factor—what they know), as well as for an authentication code from their MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources.'},
//             {corr : 'D'},
//             { answer :   'Enable multi-factor authentication'},
//         ],

//     },
//     {
//         'question' :   'Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?',
//         options :[
//             { option :   'AWS Trusted Advisor'},
//             { option :   'AWS CloudTrail'},
//             { option :   'AWS X-Ray'},
//             { option :   'AWS Identity and Access Management (AWS IAM)'}
//         ],    
//         'explanation' :[
//             {question :   'Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?'},
//             {exp :'AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs and APIs.'},
//             {corr:'B'},
//             {answer :   'AWS CloudTrail'},
//             ],
//     },
//     {
//         'question' :   'Which service would be used to send alerts based on Amazon CloudWatch alarms?',
//         options :[
//             { option :   'Amazon Simple Notification Service (Amazon SNS)'},
//             { option :   'AWS CloudTrail'},
//             { option :   'AWS Trusted Advisor'},
//             { option :   'Amazon Route 53'}
//         ],    
//         'explanation' :[
//             {question :   'Which service would be used to send alerts based on Amazon CloudWatch alarms?'},
//             {exp :'Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, push notifications, and SMS deliveries.'},
//             {corr: 'A'},
//             {answer :   'Amazon Simple Notification Service (Amazon SNS)'},
//         ],
//     },
//     {
//         'question' :   'Where can a user find information about prohibited actions on the AWS infrastructure?',
//         options :[
//             { option :   'AWS Trusted Advisor'},
//             { option :   'AWS Identity and Access Management (IAM)'},
//             { option :   'AWS Billing Console'},
//             { option :   'AWS Acceptable Use Policy'}
//         ],    
//         'explanation' :[
//             {question :   'Where can a user find information about prohibited actions on the AWS infrastructure?'},
//             {exp : 'The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure.'},
//             {corr: 'D'},
//             {answer :   'AWS Acceptable Use Policy'}

//         ],

//     },
// ];


