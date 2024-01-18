<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DemoContentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'price' => $this->price,
            'production_date' => $this->production_date,
            'main_product_id' => $this->main_product_id,
            'main_product_name' => $this->mainProduct->name,
            'type' => $this->type,
            'status' => $this->status,
        ];
    }
}
