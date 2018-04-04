<?php
namespace App\Repository;

use App\Model\Group;
use App\Repository\Interfaces\GroupRepositoryInterface;
use Illuminate\Support\Facades\Auth;
use App\Repository\Eloquent\Repository;

class GroupRepository extends Repository implements GroupRepositoryInterface
{
    public function model()
    {
        return Group::class;
    }
}
