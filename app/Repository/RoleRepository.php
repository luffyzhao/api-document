<?php
namespace App\Repository;

use App\Model\Role;
use App\Repository\Interfaces\RoleRepositoryInterface;
use Illuminate\Support\Facades\Auth;
use App\Repository\Eloquent\Repository;

class RoleRepository extends Repository implements RoleRepositoryInterface
{
    public function model()
    {
        return Role::class;
    }
}
