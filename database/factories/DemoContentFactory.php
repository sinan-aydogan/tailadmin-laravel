<?php

namespace Database\Factories;

use App\Models\DemoContent;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class DemoContentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = DemoContent::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->randomNumber(3) . ("-" . $this->faker->colorName()),
            'type' => $this->faker->randomKey(['Printer', 'Pencil', 'Clipper']),
            'main_product_id' => $this->faker->numberBetween(1,50),
            'price' => $this->faker->randomFloat(2,5,80),
            'production_date' => $this->faker->dateTimeBetween('-5 years', 'now'),
            'status' => $this->faker->boolean
        ];
    }
}
