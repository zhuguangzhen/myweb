<?php

namespace App\Http\Controllers\Business;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BusinessController extends Controller
{
   public function index(Request $request){

    return view('business/index/index');
	}
}
