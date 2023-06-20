CREATE TABLE `quack` (
  `id` int(11) NOT NULL,
  `createdAt` text COLLATE utf8_bin,
  `userId` int(11) NOT NULL,
  `text` text COLLATE utf8_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `quack` (`id`, `createdAt`, `userId`, `text`) VALUES
(1, '2019-08-08T05:43:18.023Z', 1, 'Hello, People of the World!'),
(2, '2019-08-06T14:10:51.023Z', 2, 'Como setas?'),
(3, '2019-08-03T09:09:34.023Z', 3, 'Hello, People of the World! Hello, People of the World! Hello, People of the World! Hello, People of the World! Hello,\n\nWorld!');


CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` text COLLATE utf8_bin NOT NULL,
  `password` text COLLATE utf8_bin NOT NULL,
  `name` text COLLATE utf8_bin NOT NULL,
  `userName` text COLLATE utf8_bin NOT NULL,
  `profileImageUrl` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `user` (`id`, `name`, `email`, `password`, `userName`, `profileImageUrl`) VALUES
(1, 'Young Gatchell', 'yg123@quacker.cz', 'notHashedPassword1', 'yg123', 'http://mrmrs.github.io/photos/p/1.jpg'),
(2, 'Gatchell Young', 'gyoung@quacker.cz', 'notHashedPassword2', 'gyoung', 'http://mrmrs.github.io/photos/p/2.jpg'),
(3, 'Mitchel Old', 'oldmit@quacker.cz', 'notHashedPassword3', 'oldmit', 'http://mrmrs.github.io/photos/p/3.jpg');

ALTER TABLE `quack`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `quack`
--
ALTER TABLE `quack`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `user`
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
