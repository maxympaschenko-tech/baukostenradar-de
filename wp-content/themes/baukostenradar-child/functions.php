<?php
if (!defined('ABSPATH')) {
    exit;
}

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('baukostenradar-child', get_stylesheet_uri(), array(), '0.1.0');
});

add_filter('document_title_separator', function () {
    return '|';
});

add_action('wp_head', function () {
    if (!is_front_page()) {
        return;
    }

    $items = array(
        array('name' => 'Kosten', 'url' => home_url('/kosten/')),
        array('name' => 'Rechner', 'url' => home_url('/rechner/')),
        array('name' => 'Städte', 'url' => home_url('/staedte/')),
        array('name' => 'Förderung', 'url' => home_url('/foerderung/')),
        array('name' => 'Ratgeber', 'url' => home_url('/ratgeber/')),
    );

    $schema = array(
        '@context' => 'https://schema.org',
        '@type' => 'ItemList',
        'name' => 'BauKostenRadar Hauptbereiche',
        'itemListElement' => array_map(function ($item, $index) {
            return array(
                '@type' => 'ListItem',
                'position' => $index + 1,
                'name' => $item['name'],
                'url' => $item['url'],
            );
        }, $items, array_keys($items)),
    );

    echo '<script type="application/ld+json">' . wp_json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . '</script>';
});
