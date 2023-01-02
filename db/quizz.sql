-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 02 jan. 2023 à 17:19
-- Version du serveur : 10.4.25-MariaDB
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `quizz`
--

-- --------------------------------------------------------

--
-- Structure de la table `explanation`
--

CREATE TABLE `explanation` (
  `id` int(11) NOT NULL,
  `explanation` varchar(255) NOT NULL,
  `corr` varchar(255) NOT NULL,
  `answer` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `explanation`
--

INSERT INTO `explanation` (`id`, `explanation`, `corr`, `answer`) VALUES
(1, 'The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load', 'C', 'Amazon EC2 instances can be launched on demand when needed'),
(2, 'AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used com', 'B', 'AWS Database Migration Service (AWS DMS)'),
(3, 'AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS.', 'D', 'AWS Marketplace'),
(4, 'Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define.', 'D', 'Amazon Virtual Private Cloud (Amazon VPC)'),
(5, 'Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model.', 'B', 'Maintaining physical hardware '),
(6, 'To deliver content to users with lower latency, Amazon CloudFront uses a global network of points ofpresence (edge locations and regional edge caches) worldwide. ', 'B', 'Edge locations'),
(7, 'Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their username and passwor', 'C', 'Enable multi-factor authentication'),
(8, 'AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Co', 'B', 'AWS CloudTrail'),
(9, 'Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, push ', 'A', 'Amazon Simple Notification Service (Amazon SNS)'),
(10, 'The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure.', 'D', 'AWS Acceptable Use Policy');

-- --------------------------------------------------------

--
-- Structure de la table `options`
--

CREATE TABLE `options` (
  `id` int(11) NOT NULL,
  `option_A` varchar(255) NOT NULL,
  `option_B` varchar(255) NOT NULL,
  `option_C` varchar(255) NOT NULL,
  `option_D` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `options`
--

INSERT INTO `options` (`id`, `option_A`, `option_B`, `option_C`, `option_D`) VALUES
(1, 'Amazon EC2 costs are billed on a monthly basis', 'Users retain full administrative access to their Amazon EC2 instances', 'Amazon EC2 instances can be launched on demand when needed', 'Users can permanently run enough instances to handle peak workloads'),
(2, 'AWS Storage Gateway', 'AWS Database Migration Service (AWS DMS)', 'Amazon EC2', 'Amazon AppStream 2.0'),
(3, 'AWS Config', 'AWS OpsWorks', 'AWS SDK', 'AWS Marketplace'),
(4, 'AWS Config', 'Amazon Route 53', 'AWS Direct Connect', 'Amazon Virtual Private Cloud (Amazon VPC)'),
(5, 'Configuring third-party applications', 'Maintaining physical hardware ', 'Securing application access and data', 'Managing guest operating systems'),
(6, 'AWS Regions', 'Edge locations', 'Availability Zones', 'Virtual Private Cloud (VPC)'),
(7, 'Use Amazon Cloud Directory', 'Audit AWS Identity and Access Management (IAM) roles', 'Enable multi-factor authentication', 'Enable AWS CloudTrail'),
(8, 'AWS Trusted Advisor', 'AWS CloudTrail', 'AWS X-Ray', 'AWS Identity and Access Management (AWS IAM)'),
(9, 'Amazon Simple Notification Service (Amazon SNS)', 'AWS CloudTrail', 'AWS Trusted Advisor', 'Amazon Route 53'),
(10, 'AWS Trusted Advisor', 'AWS Identity and Access Management (IAM)', 'AWS Billing Console', 'AWS Acceptable Use Policy');

-- --------------------------------------------------------

--
-- Structure de la table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `question` varchar(255) NOT NULL,
  `options_id` int(11) NOT NULL,
  `explanation_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `questions`
--

INSERT INTO `questions` (`id`, `question`, `options_id`, `explanation_id`) VALUES
(1, 'Why is AWS more economical than traditional data centers for applications with varying compute workloads?', 1, 1),
(2, 'Which AWS service would simplify the migration of a database to AWS?', 2, 2),
(3, 'Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?', 3, 3),
(4, 'Which AWS networking service enables a company to create a virtual network within AWS?', 4, 4),
(5, 'Which of the following is an AWS responsibility under the AWS shared responsibility model?', 5, 5),
(6, 'Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?', 6, 6),
(7, 'How would a system administrator add an additional layer of login security to a user s AWS Management Console?', 7, 7),
(8, 'Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?', 8, 8),
(9, 'Which service would be used to send alerts based on Amazon CloudWatch alarms?', 9, 9),
(10, 'Where can a user find information about prohibited actions on the AWS infrastructure?', 10, 10);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `explanation`
--
ALTER TABLE `explanation`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `options`
--
ALTER TABLE `options`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `options_id` (`options_id`),
  ADD KEY `explanation_id` (`explanation_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `explanation`
--
ALTER TABLE `explanation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `options`
--
ALTER TABLE `options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`options_id`) REFERENCES `options` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `questions_ibfk_2` FOREIGN KEY (`explanation_id`) REFERENCES `explanation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
