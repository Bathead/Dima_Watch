<?php
/*
Plugin Name: Dima Watch
Plugin URI: http://www.dima.rv.ua
Description: Тестове завдання на PHP CMS Developer у Soft Group
Version: 1
Author: Dima Oliynyk
Text Domain: dimawatch
*/
add_action("widgets_init", function () {
    register_widget("DimaWatch");
    wp_register_style('dwatch-style', plugins_url( '/css/style.css', __FILE__ ));
    wp_register_style('jquery-timepicker', plugins_url( '/css/jquery.timepicker.css', __FILE__ ));
    wp_register_script('cookie', plugins_url( '/js/cookie.js', __FILE__ ));
    wp_register_script('dwatch-analog', plugins_url( '/js/analog.js', __FILE__ ));
    wp_register_script('dwatch-digital', plugins_url( '/js/digital.js', __FILE__ ));
    wp_register_script('dwatch-alarm', plugins_url( '/js/alarm.js', __FILE__ ));
    wp_register_script('jquery-timepicker', plugins_url( '/js/jquery.timepicker.min.js', __FILE__ ));

});
class DimaWatch extends WP_Widget
{
    public function __construct() {
        parent::__construct('dima_watch', 'Dima Watch',
            ['description' => 'Чудовий годинник з будильником :)']);
    }
    public function form($instance) {

        $formatId = $this->get_field_id("format");
        $formatName = $this->get_field_name("format");
        $analog = $this->get_field_name("analog");
        $digital = $this->get_field_name("digital");

        $format = null;
        if (!empty($instance)) {
            $format = $instance['format'];
        }

        if(is_null($format)) {
            $format = esc_attr($analog);
        }

        echo '<br /><label for="' . $formatId . '">Формат годинника: </label>';
        echo '<p><label><input type="radio" id="' . $formatId . '" name="' . $formatName . '" value="' . esc_attr($analog) . '" '
            . checked( $format === esc_attr($analog), true, false ) . '>Аналоговий</label><br /> ';
        echo '<label><input type="radio" id="' . $formatId . '" name="' . $formatName . '" value="' . esc_attr($digital) . '" '
            . checked( $format === esc_attr($digital), true, false ) . '>Цифровий</label><br /></p> ';
    }
    public function update($newInstance, $oldInstance) {
        $values = [];
        $values['format'] = htmlentities($newInstance['format']);
        return $values;
    }
    public function widget($args, $instance) {
        $format = $instance['format'];
        wp_enqueue_style('dwatch-style');
        wp_enqueue_style('jquery-timepicker');
        wp_enqueue_script('cookie');
        wp_enqueue_script('jquery-timepicker');
        wp_enqueue_script('dwatch-alarm');
        switch(esc_attr($format)) {
            case $this->get_field_name('analog'):
                wp_enqueue_script('dwatch-analog');
                break;
            case $this->get_field_name('digital'):
                wp_enqueue_script('dwatch-digital');
                break;
            default:
                wp_enqueue_script('dwatch-analog');
        }
        echo '<aside class="widget"><h2 class="widget-title">Годинник</h2><div class="dima-watch-class"></div>';
        echo '<div class="dima-alarm-class"></div></aside>';
    }
}