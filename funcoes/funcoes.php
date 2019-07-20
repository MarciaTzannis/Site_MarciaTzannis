<?php
    function get_posts(){
        $posts = array();

        $selecionar = mysql_query("SELECT 'posts_id', 'titulo', 'likes' FROM 'posts'");
        while($row = mysql_fetch_object($selecionar)){
            echo '<p>' .$row->titulo. '<p>';
        }
    }

?>