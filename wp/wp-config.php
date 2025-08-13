<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mmdoomsday' );

/** Database username */
define( 'DB_USER', 'mmdoomsday' );

/** Database password */
define( 'DB_PASSWORD', 'secret123' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '9p2H8Q &1%e#Gx^-!MNCy5>QX3#<9:EfRHTug$~C 9vw-(g}OeRd|+2|JO~Gh2g9' );
define( 'SECURE_AUTH_KEY',  'ooH%{rBZ*0t!aL4xD^=plr4Mh%WhIfn#US1N/Z`Y=qQx(*U&MOSLQdqz^O8HZEpm' );
define( 'LOGGED_IN_KEY',    '7fxsV#X=&``%g&Q,>YOKE#U150A;X/BbHl5x-P@UlEy1c.M48Cp}bB6~5Hn3tPP-' );
define( 'NONCE_KEY',        'nn`RUS!DvA5n|_:.4{-W4Yb|6x#BCjay*ZAm%L01O^)3LiX${lVs+_[> !NJ/M^0' );
define( 'AUTH_SALT',        'P7G/,vwd!`^Z=Mdez0O~{94@Z9IV^E36n/#SH=s)<V2|1xSA&%Dl;np?u=jrD6?1' );
define( 'SECURE_AUTH_SALT', '@ou>{U0ExdcG,HpG<j$o{xVg$/1]./3ZByMbp Ia]]WHu5e=`nuho~.G>wQIzgzJ' );
define( 'LOGGED_IN_SALT',   '3Pd4E*<$|&r)yXSePlr)<,(uI%rk9Zl`20+0mU8Cw4y:Tt/;!5O[{*Czl.{$n846' );
define( 'NONCE_SALT',       '3f]doKwT7y^Jwtu|FHMl*&x^FxWp.08-{bi%v;y?H XtrW?L,w Qfn06%DeMu5pj' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
