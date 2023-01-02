


let questions = [
    {
        'question' :   'Why is AWS more economical than traditional data centers for applications with varying compute workloads?',
        options :[
            { option :   'Amazon EC2 costs are billed on a monthly basis', isCorrect : false},
            { option :   'Users retain full administrative access to their Amazon EC2 instances', isCorrect : false},
            { option :   'Amazon EC2 instances can be launched on demand when needed', isCorrect : true},
            { option :   'Users can permanently run enough instances to handle peak workloads', isCorrect : false}
        ],    
        'explanation' :[
            {question :   'Why is AWS more economical than traditional data centers for applications with varying compute workloads?'},
            {exp: 'The ability to launch instances on demand when needed allows users to launch and terminate instances inresponse to a varying workload. This is a more economical practice than purchasing enough on-premises serversto handle the peak load'},
            {corr:'C'}
        ],

    },
    {
        'question' :   'Which AWS service would simplify the migration of a database to AWS?',
        options :[
            { option :   'AWS Storage Gateway', isCorrect : false},
            { option :   'AWS Database Migration Service (AWS DMS)', isCorrect : true},
            { option :   'Amazon EC2', isCorrect : false},
            { option :   'Amazon AppStream 2.0', isCorrect : false}
        ],    
        'explanation' :[
            { question :   'Which AWS service would simplify the migration of a database to AWS?'},
            {exp :'AWS DMS helps users migrate databases to AWS quickly and securely. The source database remainsfully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.'},
            {corr : 'B'}
        ],

    },
    {
        'question' :   'Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?',
        options :[
            { option :   'AWS Config', isCorrect : false},
            { option :   'AWS OpsWorks', isCorrect : false},
            { option :   'AWS SDK', isCorrect : false},
            { option :   'AWS Marketplace', isCorrect : true}
        ],    
        'explanation' :[
            {question :   'Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?'},
            {exp :'AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS.'},
            {corr:'D'}
        ],
    },
    {
        'question' :   'Which AWS networking service enables a company to create a virtual network within AWS?',
        options :[
            { option :   'AWS Config', isCorrect : false},
            { option :   'Amazon Route 53', isCorrect : false},
            { option :   'AWS Direct Connect', isCorrect : false},
            { option :   'Amazon Virtual Private Cloud (Amazon VPC)', isCorrect : true}
        ],    
        'explanation' :[
            {question :   'Which AWS networking service enables a company to create a virtual network within AWS?'},
            {exp :'Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define.'},
            {corr :'D'}
        ],
    },
    {
        'question' :   'Which of the following is an AWS responsibility under the AWS shared responsibility model?',
        options :[
            { option :   'Configuring third-party applications', isCorrect : false},
            { option :   'Maintaining physical hardware ', isCorrect : true},
            { option :   'Securing application access and data', isCorrect : false},
            { option :   'Managing guest operating systems', isCorrect : false}
        ],    
        'explanation' :[
            {question :   'Which of the following is an AWS responsibility under the AWS shared responsibility model?'},
            {exp: 'Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model.'},
            {corr:'B'}
        ],

    },
    {
        'question' :   'Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?',
        options :[
            { option :   'AWS Regions', isCorrect : false},
            { option :   'Edge locations', isCorrect : true},
            { option :   'Availability Zones', isCorrect : false},
            { option :   'Virtual Private Cloud (VPC)', isCorrect : false}
        ],    
        'explanation' :[
            {question :   'Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?'},
            {exp :'To deliver content to users with lower latency, Amazon CloudFront uses a global network of points ofpresence (edge locations and regional edge caches) worldwide. '},
            {corr:'B'}
            ],

    },
    {
        'question' :   'How would a system administrator add an additional layer of login security to a user s AWS Management Console?',
        options :[
            { option :   'Use Amazon Cloud Directory', isCorrect : false},
            { option :   'Audit AWS Identity and Access Management (IAM) roles', isCorrect : false},
            { option :   'Enable multi-factor authentication', isCorrect : true},
            { option :   'Enable AWS CloudTrail', isCorrect : false}
        ],    
        'explanation' :[
            { question :   'How would a system administrator add an additional layer of login security to a user s AWS Management Console?'},
            {exp :'Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their username and password (the first factor—what they know), as well as for an authentication code from their MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources.'},
            {corr : 'D'}
        ],

    },
    {
        'question' :   'Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?',
        options :[
            { option :   'AWS Trusted Advisor', isCorrect : false},
            { option :   'AWS CloudTrail', isCorrect : true},
            { option :   'AWS X-Ray', isCorrect : false},
            { option :   'AWS Identity and Access Management (AWS IAM)', isCorrect : false}
        ],    
        'explanation' :[
            {question :   'Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?'},
            {exp :'AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs and APIs.'},
            {corr:'B'}
            ],
    },
    {
        'question' :   'Which service would be used to send alerts based on Amazon CloudWatch alarms?',
        options :[
            { option :   'Amazon Simple Notification Service (Amazon SNS)', isCorrect : true},
            { option :   'AWS CloudTrail', isCorrect : false},
            { option :   'AWS Trusted Advisor', isCorrect : false},
            { option :   'Amazon Route 53', isCorrect : false}
        ],    
        'explanation' :[
            {question :   'Which service would be used to send alerts based on Amazon CloudWatch alarms?'},
            {exp :'Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, push notifications, and SMS deliveries.'},
            {corr: 'A'}
        ],
    },
    {
        'question' :   'Where can a user find information about prohibited actions on the AWS infrastructure?',
        options :[
            { option :   'AWS Trusted Advisor', isCorrect : false},
            { option :   'AWS Identity and Access Management (IAM)', isCorrect : false},
            { option :   'AWS Billing Console', isCorrect : false},
            { option :   'AWS Acceptable Use Policy', isCorrect : true}
        ],    
        'explanation' :[
            {question :   'Where can a user find information about prohibited actions on the AWS infrastructure?'},
            {exp : 'The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure.'},
            {corr: 'D'}

        ],

    },
];