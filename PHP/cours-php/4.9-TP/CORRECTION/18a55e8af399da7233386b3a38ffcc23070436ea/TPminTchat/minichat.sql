-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mer 29 Août 2018 à 17:21
-- Version du serveur :  5.6.26
-- Version de PHP :  5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `test`
--

-- --------------------------------------------------------

--
-- Structure de la table `minichat`
--

CREATE TABLE IF NOT EXISTS `minichat` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `date_ajout` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `minichat`
--

INSERT INTO `minichat` (`id`, `pseudo`, `message`, `date_ajout`) VALUES
(1, 'votre pseudo', '                Votre message ici...\r\n            ', '2010-04-02 15:28:02'),
(2, 'nico', 'comment tu vas? Henri\r\n            ', '0000-00-00 00:00:00'),
(3, 'T', 'Votre message ici...', '0000-00-00 00:00:00'),
(4, 'tsar', 'bonsoir les gar c''est les tsar', '2018-08-27 18:57:33'),
(5, 'kenzo', 'wooooo mon petit sa''a dit quoi?', '2018-08-27 19:07:22'),
(6, 'TSAR', 'bonsoir', '2018-08-29 15:28:33'),
(7, 'nico', 'bonjour', '2018-08-29 15:30:08');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `minichat`
--
ALTER TABLE `minichat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `minichat`
--
ALTER TABLE `minichat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
