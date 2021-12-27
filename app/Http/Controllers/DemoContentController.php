<?php

namespace App\Http\Controllers;

use App\Models\DemoContent;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DemoContentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index(Request $request)
    {
        $demoContent = DemoContent::tableSearch($request->input('searchObj'));

        return Inertia::render('Samples/Components/BackEndTable', [
            'demoContent' => $demoContent
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DemoContent  $demoContent
     * @return \Illuminate\Http\Response
     */
    public function show(DemoContent $demoContent)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DemoContent  $demoContent
     * @return \Illuminate\Http\Response
     */
    public function edit(DemoContent $demoContent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DemoContent  $demoContent
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DemoContent $demoContent)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DemoContent  $demoContent
     * @return \Illuminate\Http\Response
     */
    public function destroy(DemoContent $demoContent)
    {
        //
    }
}
