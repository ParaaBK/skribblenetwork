SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE DATABASE IF NOT EXISTS `chat` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

USE `chat`;

DROP TABLE IF EXISTS `chat_users`;
CREATE TABLE IF NOT EXISTS `chat_users` (
    `id` int NOT NULL AUTO_INCREMENT,
    `username` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `phone` varchar(255) NOT NULL,
    `country` varchar(255) NOT NULL,
    `timezone` varchar(255) NOT NULL,
    `language` varchar(255) NOT NULL,
    `avatar` varchar(255) NOT NULL,
    `status` varchar(255) NOT NULL,
    `last_activity` varchar(255) NOT NULL,
    `friend_code` varchar(255) NOT NULL,
    `login_token` varchar(255) NOT NULL,
    `created_at` datetime NOT NULL,
    `updated_at` datetime NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `sudoku`;
CREATE TABLE IF NOT EXISTS `sudoku` (
    `id` int NOT NULL AUTO_INCREMENT,
    `status` varchar(255) NOT NULL,
    `invite_code` varchar(255) NOT NULL,
    `player` int NOT NULL,
    `player_two` int NOT NULL,
    `player_score` int NOT NULL,
    `player_two_score` int NOT NULL,
    `start_time` datetime NOT NULL,
    `end_time` datetime NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`player`) REFERENCES `chat_users`(`id`),
    FOREIGN KEY (`player_two`) REFERENCES `chat_users`(`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
COMMIT;


DROP TABLE IF EXISTS `chat_chats`;
CREATE TABLE IF NOT EXISTS `chat_chats` (
    `id` int NOT NULL AUTO_INCREMENT,
    `game_id` int NOT NULL,
    `status` varchar(255) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`game_id`) REFERENCES `chat_sudoku`(`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `chat_messages`;
CREATE TABLE IF NOT EXISTS `chat_messages` (
    `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
    `game_id` int NOT NULL,
    `user_id` int NOT NULL,
    `message` text NOT NULL,
    `created_at` datetime NOT NULL,
    `updated_at` datetime NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`game_id`) REFERENCES `chat_sudoku`(`id`),
    FOREIGN KEY (`user_id`) REFERENCES `chat_users`(`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `chat_friend_requests`;
CREATE TABLE IF NOT EXISTS `chat_friend_requests` (
    `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` int NOT NULL,
    `friend_id` int NOT NULL,
    `created_at` datetime NOT NULL,
    `updated_at` datetime NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `chat_users`(`id`),
    FOREIGN KEY (`friend_id`) REFERENCES `chat_users`(`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `chat_friends`;
CREATE TABLE IF NOT EXISTS `chat_friends` (
    `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` int NOT NULL,
    `friend_id` int NOT NULL,
    `created_at` datetime NOT NULL,
    `updated_at` datetime NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `chat_users`(`id`),
    FOREIGN KEY (`friend_id`) REFERENCES `chat_users`(`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
