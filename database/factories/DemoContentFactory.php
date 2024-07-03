<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class DemoContentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
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
