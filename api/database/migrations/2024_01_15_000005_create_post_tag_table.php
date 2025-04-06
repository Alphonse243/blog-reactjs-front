<?php
use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\Schema\Blueprint;

class Migration_2024_01_15_000005_create_post_tag_table
{
    public function up()
    {
        Capsule::schema()->create('post_tag', function (Blueprint $table) {
            $table->foreignId('post_id')->constrained()->onDelete('cascade');
            $table->foreignId('tag_id')->constrained()->onDelete('cascade');
            $table->primary(['post_id', 'tag_id']);
        });
    }

    public function down()
    {
        Capsule::schema()->dropIfExists('post_tag');
    }
}
