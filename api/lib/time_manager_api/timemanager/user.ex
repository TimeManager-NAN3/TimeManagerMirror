defmodule TimeManagerApi.Timemanager.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :email, :string
    field :firstname, :string
    field :lastname, :string
    field :password, :string
    field :rank, Ecto.Enum, values: [:employee, :manager, :general_manager], default: :employee
    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:email, :password, :rank, :firstname, :lastname])
    |> validate_required([:email, :password, :firstname, :lastname])
    |> unique_constraint(:email)
    |> validate_format(:email, ~r/\w+@\w+\.\w+/)
  end
end
