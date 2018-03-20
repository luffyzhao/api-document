<?php

use Faker\Generator as Faker;

$factory->define(App\Model\Book::class, function (Faker $faker) {
    return [
        'name' => $faker->catchPhrase,
        'identify' => $faker->unique()->bothify("???####"),
        'description' => $faker->text,
        'status' => $faker->randomElement([0,1]),
        'created_at' => $faker->date('Y-m-d H:i:s'),
        'updated_at' => $faker->date('Y-m-d H:i:s'),
    ];
});
